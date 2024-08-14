import React, { useState } from 'react'

const Form1 = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [address, setAddress] = useState("");
    const [male, setMale] = useState("");
    const [female, setFemale] = useState("");

    // console.log(name)

    const handleNameChanger =(e)=>{
      let nameValue = e.target.value
        setname(e.target.value)
        // var x = 10
    }
   
    const handleEmailChanger =(e)=>{
      let emailValue = e.target.value
      console.log(emailValue)
      setEmail(e.target.value)
    }
    const handlePasswordChanger =(e)=>{
      let passwordValue = e.target.value
      console.log(passwordValue)
      setPassowrd(passwordValue)
    }
    const hanldeMaleChanger =(e)=>{
      let maleValue = e.target.checked
      console.log(maleValue)
      setMale(maleValue)
    }
    const handleFemaleChanger =(e)=>{
      let feMaleValue = e.target.checked
      console.log(feMaleValue)
      setFemale(feMaleValue)
    }
    const handleAdressChanger =(e)=>{
      let addressValue = e.target.value
      console.log(addressValue)
      setAddress(addressValue)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        let obj = {
          name:name,
          email:email,
          password:password,
          address:address,
          gender:male===true ? "male":"female"
        }
        console.log(obj)
    }
  return (
    <div>
        <h1>This is form 1 page</h1>
       <form action="">
        <label htmlFor="">Name</label><br />
        <input onChange={handleNameChanger}  type="text" /><br />
        <label htmlFor="">Email</label><br />
        <input onChange={handleEmailChanger} type="email" /><br />
        <label htmlFor="">Password</label><br />
        <input onChange={handlePasswordChanger} type="password" /><br />

        <div>
            <label htmlFor="">Gender :</label>

            <label htmlFor="f">Male</label>
            <input onChange={hanldeMaleChanger} name='gender' id='f' type="radio" />
            <label htmlFor="m">Female</label>
            <input onChange={handleFemaleChanger} name='gender' id='m' type="radio" />
        </div>
        <label htmlFor="">Address</label><br />
        <textarea onChange={handleAdressChanger}  name="" id=""></textarea> <br />

        <button onClick={handleSubmit}>Submit</button>


      </form>
    </div>
  )
}

export default Form1
