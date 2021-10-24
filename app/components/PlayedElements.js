import React, { useEffect, useContext, useRef } from "react"
import { useImmer } from "use-immer"
import { mapper } from "../scripts/mapper"

// Components
import Loading from "./Loading"

// Context
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function PlayedElements() {
  const gameEl = useRef(null)
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  console.log(appState)

  const [state, setState] = useImmer({
    isLoading: true,
    playAgainButton: false
  })

  useEffect(() => {
    setTimeout(() => {
      setState(draft => {
        draft.isLoading = false
        draft.playAgainButton = true
      })
      if (appState.win) {
        appDispatch({ type: "increaseScore" })
      }
      if (!appState.win && appState.draw != true) {
        appDispatch({ type: "decreaseScore" })
      }
    }, 1000)
  }, [])

  function buttonHandler() {
    gameEl.current.classList.add("hidden")
    setTimeout(() => {
      appDispatch({ type: "playAgain" })
    }, 300)
  }

  function resultMapper(result) {
    switch (result) {
      case true:
        return "YOU WIN"
      case false:
        return "YOU LOSE"
    }
  }

  return (
    <div className="game" ref={gameEl}>
      <div id={appState.userMove} className={"game-item " + mapper(appState.userMove) + " scaled"}>
        <div></div>
      </div>
      <div className={"play-again-button " + (state.playAgainButton ? "visible" : "")}>
        <span>{appState.draw ? "DRAW" : resultMapper(appState.win)}</span>
        <button onClick={buttonHandler}>PLAY AGAIN</button>
      </div>
      {state.isLoading ? (
        <div className="waiting scaled">
          <Loading />
        </div>
      ) : (
        <div id={appState.computerMove} className={"game-item " + mapper(appState.computerMove) + " scaled"}>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default PlayedElements
