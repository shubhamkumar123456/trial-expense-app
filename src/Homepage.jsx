import React from 'react'
import Navbar from './Navbar'
import GetText from './GetText'

const Homepage = (props) => {
  console.log(props)
  // console.log(props.value)
  // function abc(ans){
  //   console.log(ans)
  // }
  return (
    <div>

      This is Home page
<h1>      {props.value}</h1>

<GetText text = "home page se aaye"/>
<h1>{props.ans.name}</h1>
<h1>{props.ans.age}</h1>

    </div>
  )
}

export default Homepage
