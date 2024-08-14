import React, { useEffect, useState } from 'react'

const EffectConcept = () => {

    const [x, setx] = useState(0);

    // console.log(x)
  console.log("outside code")
    useEffect(()=>{
      console.log("hello")
    },[x])
  return (
    <div>
        <h1>{x}</h1>
      <button onClick={()=>setx(x+1)}>increment</button>
    </div>
  )
}

export default EffectConcept
