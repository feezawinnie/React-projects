import React, {useState} from 'react'

const List = () => {
    const [isOrdered, setIsOrdered]=useState(true);
    const [hoveredItem, setHoveredItem]=useState(null);
    const items= ["lip-gloss", "teddy-bear", "candy"]
    const ListTag = isOrdered ? 'ol' : 'ul'

    const listType = () => {
      setIsOrdered(!isOrdered);
    }

  return (
    <div>
      <h1>my items:</h1>
      <ListTag> 
        {items.map((item) => (<li key={item} onMouseEnter={() => 
         setHoveredItem(item)}
         onMouseLeave={() => setHoveredItem(null)}style={{ cursor:"pointer", 
        backgroundColor: hoveredItem === item ? "#ab2227ff" : "#a6d6b6ff",
        transition:"all 0.3s ease"}} >I gat a {item}
        </li>))}       
      </ListTag>
      <button onClick={listType}>
        switch{isOrdered ? "bulleted" : "numbered"}
       list</button>
    </div>
  )
}

export default List
