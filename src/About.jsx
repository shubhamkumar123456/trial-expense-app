import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const About = (props) => {
  console.log(props)
  const [x,setX] = useState(false)
  console.log(x)
  // let x = false
  
  let details = {
    name:"abc",
    age:34
  }
  console.log(details)
  
useEffect(()=>{
  props.xyz(details)
},[])


  const handleSwap = ()=>{
    if(x===false){
      setX(true)
    }
    else{
   setX(false)
    }
  }
  return (
    <div>

      This is about page


{/* {x ?   <h1>This is heading one</h1>  : <h1>This is heading two</h1> } */}

{ x &&  <h1>This is heading one</h1>}
{ !x &&  <h1>This is heading two</h1>} 
   
     

      <button onClick={handleSwap}>swap</button>

  
    </div>
  )
}

export default About
