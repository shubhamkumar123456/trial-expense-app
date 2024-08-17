import React, { useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import GetText from './GetText';
const Expense = () => {

const [x, setx] = useState(false);
const [uptObj, setuptObj] = useState("");
console.log(uptObj)

let updateSnoRef = useRef()
let updatepriceRef = useRef()
let updateplaceRef = useRef()

    let obj={
        backgroundColor:"red",
        fontSize:"40px"
    }
    // let arr =
    const [arr, setarr] = useState( [
      {
          sno:1,
          place:"up",
          price:500
      },
      {
          sno:2,
          place:"petrol",
          price:300
      },
      {
          sno:3,
          place:"food",
          price:100
      },
      {
          sno:4,
          place:"club",
          price:5000
      },
  
  ]);

    let snoRef = useRef()
    let placeRef = useRef()
    let priceRef = useRef()

    const submitForm = (e)=>{
        e.preventDefault()
        console.log("hello")

        let obj = {
            sno:snoRef.current.value,
            price:priceRef.current.value,
            place:placeRef.current.value
        }
        
        if(obj.sno && obj.price && obj.place){
          setarr([...arr,obj])
          snoRef.current.value = ""
          priceRef.current.value=""
          placeRef.current.value=""
        }
    }
    const handleDelete = (ans,i)=>{
      console.log(ans,i);
      // method 1 using splice method
   
      // let copyArr = [...arr]
      // copyArr.splice(i,1)
      // console.log(copyArr)
      // setarr(copyArr)

      // method 2 using filter method

      let ansArr = arr.filter((x)=>x.sno != ans.sno)
      console.log(ansArr)
      setarr(ansArr)
   
    }

    const handleUpdate = (ans,index)=>{
      console.log(ans, index)
      setuptObj(ans)
      setx(true)
    }

    const handleUpdateSubmit = (e)=>{
      e.preventDefault()
      console.log("hello")
      let obj = {

        place:updateplaceRef.current.value,
        price:updatepriceRef.current.value
      }
      console.log(obj)

      // let place=updateplaceRef.current.value
      // let price=updatepriceRef.current.value
      // console.log(ans)
      console.log(uptObj)
      let index = arr.findIndex((ele)=>ele.sno===uptObj.sno)
      console.log(index)

      let copyArr = [...arr]

      let updatedObj = {}
        if(obj.place){
          updatedObj.place=obj.place
        }else{
          updatedObj.place = uptObj.place
        }

        if(obj.price){
          updatedObj.price = obj.price
        }else{
          updatedObj.price = uptObj.price
        }

      copyArr[index] = updatedObj


      setarr(copyArr)
      setx(false)

    }
  return (
    <div>
      <h3 className='text-center mt-3'>This is exppense tracker app</h3>

      <form style={{width:"max-content"}} action="" className='bg-dark p-3 m-auto mt-3 d-flex gap-2'>
        <input className='p-1' type="number" ref={snoRef}  placeholder='sno'/>
        <input className='p-1' type="text" ref={placeRef}  placeholder='place'/>
        <input className='p-1' type="number" ref={priceRef}  placeholder='price'/>
        <button className='btn btn-info' onClick={submitForm}>Submit</button>
      </form>

  {!arr.length &&  <h3 className='text-center mt-1'>Please Add items to display</h3>}
   

{arr.length>=1 && <table className="table table-dark text-center mt-3 w-75 m-auto">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {
    arr.map((ele,index)=>{
      return   <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{ele.place}</td>
      <td>{ele.price}</td>
      <td><button onClick={()=>handleDelete(ele,index)} className='btn btn-danger'>delete</button>  <button onClick={()=>handleUpdate(ele,index)} className='btn btn-info'>Update</button></td>
     
    </tr>
    })
  }
  
  </tbody>
</table>}

{x && <div className="updateForm">
  <IoMdClose onClick={()=>setx(false)}  size={"30px"} className='closeIcon'/>
  <form action="">
    {/* <input ref={updateSnoRef} type="number" placeholder='sno' /> */}
    <input ref={updateplaceRef} type="text" placeholder='place' /> 
    <input ref={updatepriceRef} type="number" placeholder='price' /> 
    <button onClick={handleUpdateSubmit} className='btn btn-success'>submit updates</button>
  </form>
</div>};

<GetText text = "expense page se aaye"/>
    </div>
  )
}

export default Expense
