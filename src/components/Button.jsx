import React from 'react'

function Button({btnName,classes,onClick}) {
  return (
    <button className={`px-3 py-1 rounded-md text-white ${classes}`} onClick={onClick}>{!btnName ? "Button" : btnName}</button>
  )
}

export default Button