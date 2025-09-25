

import React, { useState } from 'react'

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
    <div>
        <h1>counter app</h1>
        <h2>{count}</h2>
      <button onClick={Increase}>increase</button>
      <button onClick={Decrease}>decrease</button>
      <button onClick={Reset}>reset</button>
    </div>
  )
}

export default Count
