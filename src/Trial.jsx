import React, { useState } from 'react'

const Trial = () => {
  const [x, setx] = useState(0);
  console.log(x)
const IncrementCount = ()=>{
    setx(x+1)
}
  return (
    <div>
        <button onClick={IncrementCount}>increment</button>
        <h1>{x}</h1>
    </div>
  )
}

export default Trial
