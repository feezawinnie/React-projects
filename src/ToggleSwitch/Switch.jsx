import React from 'react'

import "./toggleswitch.css"
const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = ()=>{
    setIsOn(!isOn);
  }
  
  return (
    <div className= {`switch ${isOn ? "on" : "off"}`} onClick={toggleSwitch}>
      <div className='thumb'></div>

    </div>
  )
}

export default Switch;
