import React from 'react'

function counter({count,classes}) {
  return (
    <div className={`text-center text-3xl font-semibold ${classes}`}><h2>Count : {count}</h2></div>
  )
}

export default counter