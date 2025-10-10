import React, {useState} from 'react'

const Form = () => {
    const [text, setText]=useState("")
    
  return (
    <div style={{padding: "20px", fontFamily:"Arial"}}>
      <input type='text' value={text} placeholder='typesomething'
       onChange={(e) =>setText(e.target.value)}
       style={{padding:"8px", fontSize:"16px"}}/>
       <p style={{fontSize:"18px", fontWeight:"bold"}}>{text}</p>
    </div>
  )
}

export default Form
