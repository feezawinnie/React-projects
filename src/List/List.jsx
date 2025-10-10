import React, {useState} from 'react'

const List = () => {
    const [hoveredItem, setHoveredItem]=useState(null);
    const items= ["lip-gloss", "teddy-bear", "candy"]
  return (
    <div>
      <h1>my items:</h1>
      <ol> {items.map((item) => (<li key={item} onMouseEnter={() => 
         setHoveredItem(item)} 
         onMouseLeave={() => setHoveredItem(null)}style={{ cursor:"pointer", 
        backgroundColor: hoveredItem === item ? "#ab2227ff" : "#a6d6b6ff",
        transition:"all 0.3s ease"}} >I gat a {item}
        </li>))} 
        
       
      </ol>
    </div>
  )
}

export default List
