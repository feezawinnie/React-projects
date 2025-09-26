
import React, { useState } from 'react'
import "./index.css";

const Count = () => {
    const [count, setCount] = useState(0);

 const Increase = () => {
    setCount (count + 1)
 }
 const Decrease = () => {
    setCount (count - 1)
 }
 const Reset = () => {
    setCount (0)
 }

  return (
    <div className='btn-btns'>
        <h1 className='count'>counter app</h1>
        <h2 className='btn-btn'>{count}</h2>
        <p className='btns'>
      <button className= "btn-increase"onClick={Increase}>increase</button>
      <button className= "btn-decrease"onClick={Decrease}>decrease</button>
      <button className= "btn-reset"onClick={Reset}>reset</button>
      </p>
    </div>
  )
}

export default Count
