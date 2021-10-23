// https://blog.logrocket.com/how-to-use-svgs-in-react/ for images
import React, { useEffect, useContext } from "react"

// Context
import StateContext from "../StateContext"

function Tablo() {
  const appState = useContext(StateContext)

  return (
    <>
      <div className="tablo">
        <div className="game-name">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="score">
          <span>SCORE</span>
          <div className="ammount">{appState.score}</div>
        </div>
      </div>
    </>
  )
}

export default Tablo
