import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalComp() {
  return ReactDOM.createPortal(
    <h1>
      Portal Demo
    </h1>,
    document.getElementById("portal-root")
  )
}

export default PortalComp
