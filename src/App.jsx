import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from './components/Button'
import Counter from './components/counter'
function App() {
  const[count,setCount]=useState(0)

  const increment = ()=>{
    setCount(count+1)
  }
  const decrement = ()=>{
    setCount(count-1)
  }
  const reset = ()=>{
    setCount(0)
  }
  return (
    <div>
      <Counter classes={`mt-32 ${count > 5 ? 'text-blue-500' : 'text-black'}`} count={count}/>
      <div className='mt-8 flex justify-center gap-3'>
        <Button classes={'bg-yellow-500'} btnName={'Increment'} onClick={increment}/>
        <Button classes={'bg-black text-white'} btnName={'Reset'} onClick={reset}/>
        <Button classes={'bg-teal-500'} btnName={'Decrement'} onClick={decrement}/>
      </div>
      
    </div>
  )
}

export default App