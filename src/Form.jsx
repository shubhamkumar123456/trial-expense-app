import React, { useRef } from 'react'
import GetText from './GetText'

const Form = () => {

    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()
    let addressRef = useRef()
    let maleRef = useRef()
    let femaleRef = useRef()


    const submitData = (e)=>{
        e.preventDefault();
        console.log("running")

        let male = maleRef.current.checked
        let female = femaleRef.current.checked
        let gender;
        if(male===true){
            gender= "male"
        }
        else{
            gender ="female"
        }

        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            address:addressRef.current.value,
        //   gender:male===true? "male":"female"
        

        }
        console.log(obj)
    }
  return (
    <div>
      <h1>This is form page</h1>
      <form action="">
        <label htmlFor="">Name</label><br />
        <input ref={nameRef} type="text" /><br />
        <label htmlFor="">Email</label><br />
        <input ref={emailRef} type="email" /><br />
        <label htmlFor="">Password</label><br />
        <input ref={passwordRef} type="password" /><br />

        <div>
            <label htmlFor="">Gender :</label>

            <label htmlFor="f">Male</label>
            <input ref={maleRef} name='gender' id='f' type="radio" />
            <label htmlFor="m">Female</label>
            <input ref={femaleRef} name='gender' id='m' type="radio" />
        </div>
        <label htmlFor="">Address</label><br />
        <textarea ref={addressRef} name="" id=""></textarea> <br />

        <button onClick={submitData}>Submit</button>

    <GetText text = "form page se aaye"/>
      </form>
    </div>
  )
}

export default Form
