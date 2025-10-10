import React, {useState} from 'react'

import "./ToggleSwich.css"
const ToggleSwich = () => {
  const [isOn, setIsOn] = useState(false);

  const Switching = ()=>{
    setIsOn(!isOn);
  }
  
  return (
    <div style= {{backgroundColor:"grey", position:"relative", width: "fit-content", padding: "20px"}}>
    <div className= {`Switch ${isOn ? "on" : "off"}`} onClick={Switching}>
      hey switch

    </div>
    </div>
  )
}

export default ToggleSwich;
