import React, {useEffect, useState} from 'react'

const Fetch = () => {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res)=> {
      if(!res.ok){
        throw new Error(" Ooops 😱Error occured!")
      }
      return res.json();
     })
     .then((data)=>{
      console.log(data);
      setMessages(data);
      setLoading(false);
     })
     .catch((error) => {
      setError(error.message);
      setLoading(false);
     })
  }, []);

  if (loading) return <p style={{color:"#007bff", fontSize:"18px"}}>loading data....</p>
  if (error) return <p style={{color:"red", fontWeight:"bold"}}>error:{error}</p>;
  return (
    <div style={{textAlign:"center",fontFamily:"Arial, sans-serif", padding:"20px"}}>
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"15px"}}>{messages.map((message) => (
        <div key={message.id} style={{backgroundColor:"#f7f9fc", border:"1px solid #ccc", borderRadius:"8px",width:"250px", padding:"15px",textAlign:"left"}}>
          <h3 style={{fontSize:"16px", color:"#333"}}>{message.title}</h3>
          <p style={{fontsize:"14px", color:"#555"}}>{message.body}</p>
        </div>
       ))}
        </div>
      
    </div>
  )
}

export default Fetch;
