import React, { useEffect, useContext } from "react"

// Context
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function Rules() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function clickHandle() {
    appDispatch({ type: "closeRules" })
  }

  return (
    <div className="rules-overlay" onClick={clickHandle}>
      <div className="rules">
        <div className="rules-header">
          <h2>RULES</h2>
          <div onClick={clickHandle}></div>
        </div>
        <img src="./images/image-rules.svg" />
      </div>
    </div>
  )
}

export default Rules
