import React, { useState } from 'react'
import Navbar from './Navbar'

const Counter = (props) => {
  console.log(props)
  console.log(props.a)


  const [x,setX] = useState(10)
    // let x = 0
    
    let handleIncrement = ()=>{
      setX(x+1)
    }
  return (
    <div>

      <h1>This is counter application</h1>

      <button onClick={handleIncrement}>Increment</button>
      <span>{x}</span>
      <button>Decrement</button>
      <button>multiply by 2</button>
      <button>divide by 2</button>


    {
      props.a.map((ele)=>{
        return <p>{ele}</p>
      })
    }
 
    </div>
  )
}

export default Counter
