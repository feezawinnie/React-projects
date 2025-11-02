import React, {useState} from 'react'

import './calc.css'

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value)=> {
     setInput((prev) => prev + value)
  }

  const clearInput = ()=>{
    setInput('')
  }

  const handleEval =() => {
    try{
       setInput(eval(input).toString())
    }catch(error){
       setInput("Error")
    }
  }
   
  return (
    <div className='calc-container'>
      <input type='text' value={input} className='calc-input' readonly  />
      {/* btns*/}
      <div className='calc-btns'>
      {/*first row */}
      <button onClick={clearInput} className="clear">c</button>
      <button onClick={()=> handleClick ('/')} className="symbol">&divide;</button>
      <button onClick={()=> handleClick ('*')} className="symbol">&times;</button>
      <button onClick={()=> handleClick ('-')} className="symbol">&minus;</button>
      
      {/*numbr-btns */}
      <button onClick={()=> handleClick ('7')}>7</button>
      <button onClick={()=> handleClick ('8')}>8</button>
      <button onClick={()=> handleClick ('9')}>9</button>
      <button onClick={()=> handleClick ('+')} className='plus'>+</button>

      <button onClick={()=> handleClick ('4')}>4</button>
      <button onClick={()=> handleClick ('5')}>5</button>
      <button onClick={()=> handleClick ('6')}>6</button>

      <button onClick={()=> handleClick ('1')}>1</button>
      <button onClick={()=> handleClick ('2')}>2</button>
      <button onClick={()=> handleClick ('3')}>3</button>

      <button onClick={()=> handleClick ('0')}>0</button>
      <button onClick={()=> handleClick ('.')}>.</button>
      <button onClick={handleEval} className='equals'>=</button>
      
      </div>
    </div>
  )
}

export default Calculator;
