import React from 'react'

import "./toggleswitch.css"
const toggleSwich = () => {
  const [isOn, setIsOn] = useState(false);

  const Switching = ()=>{
    setIsOn(!isOn);
  }
  
  return (
    <div className= {`Switch ${isOn ? "on" : "off"}`} onClick={Switching}>
      <div className='thumb'></div>

    </div>
  )
}

export default toggleSwich;
