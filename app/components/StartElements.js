import React, { useEffect, useContext, useRef } from "react"

// Context
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function StartElements() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const elements = useRef(null)

  function gameHadler(e) {
    console.log()

    if (e.target.closest("div[id]").classList.contains("game-item")) {
      const item = e.target.closest("div[id]")
      elements.current.classList.add("hidden")
      setTimeout(() => {
        appDispatch({ type: "playGame", userMove: +item.id })
      }, 200)
    }
  }

  return (
    <div className="elements" onClick={gameHadler} ref={elements}>
      <div id="1" className="game-item paper paper-start">
        <div></div>
      </div>
      <div id="2" className="game-item scissors scissors-start">
        <div></div>
      </div>
      <div id="3" className="game-item rock rock-start">
        <div></div>
      </div>
    </div>
  )
}

export default StartElements
