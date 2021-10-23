import React, { useEffect, useContext } from "react"

// Context
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function StartElements() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function gameHadler(e) {
    if (e.target.classList.contains("game-item")) {
      const item = e.target
      appDispatch({ type: "playGame", userMove: +item.id })
    }
  }

  return (
    <div className="elements" onClick={gameHadler}>
      <div id="1" className="game-item paper paper-start"></div>
      <div id="2" className="game-item scissors scissors-start"></div>
      <div id="3" className="game-item rock rock-start"></div>
    </div>
  )
}

export default StartElements
