import React from "react"
import ReactDOM from "react-dom"
import { useImmerReducer } from "use-immer"
import { playGame } from "./scripts/gameEngine"

// Context
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// Components
import Tablo from "./components/Tablo"
import StartElements from "./components/StartElements"
import PlayedElements from "./components/PlayedElements"

function Main() {
  const initialState = {
    score: 0,
    win: false,
    draw: false,
    moveIsMade: false,
    rulesAreOpen: false,
    userMove: "",
    computerMove: ""
  }

  function ourReduser(draft, action) {
    switch (action.type) {
      case "playGame":
        let result = playGame(action.userMove)
        // console.log(result)
        if (result[0] == "draw") {
          draft.draw = true
        }
        if (result[0] && result[0] !== "draw") {
          draft.win = true
          draft.draw = false
          // draft.score++
        }

        if (!result[0] && result[0] !== "draw") {
          draft.win = false
          draft.draw = false
          // draft.score--
        }
        draft.moveIsMade = true
        draft.userMove = action.userMove
        draft.computerMove = result[1]
        return
      case "playAgain":
        draft.moveIsMade = false
        return
      case "increaseScore":
        draft.score++
        return
      case "decreaseScore":
        draft.score--
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReduser, initialState)

  return (
    <div className="container">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Tablo />

          {!state.moveIsMade ? <StartElements /> : <PlayedElements />}
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))
if (module.hot) {
  module.hot.accept()
}
