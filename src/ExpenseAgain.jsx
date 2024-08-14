import React, { useRef, useState } from 'react'

const ExpenseAgain = () => {
    // let obj = {
    //     name:"abc",
    //     age:"22"
    // }

    let idRef = useRef()
    let taskRef  = useRef()

const [arr, setarr] = useState([
    {
        id:1,
        task:"aaj khana bnana hai",
    },
    {
        id:2,
        task:"4 bje pdhai krni hai",
    },
    {
        id:3,
        task:"rat me club jana hai",
    },
    {
        id:4,
        task:"waps ake pubg khlna hai",
    },
    
]);

  

    const handleAddData = (e)=>{
        e.preventDefault()
        console.log("running")
        let obj = {
            id:idRef.current.value,
            task:taskRef.current.value
        }
        console.log(obj)

        // arr.push(obj)
        // console.log(arr)

      if(obj.id && obj.task){
        setarr([...arr,obj])
      }

    }

    const handleDelete=(ans,i)=>{
        console.log(ans,i)
        let copyArr = [...arr]
        copyArr.splice(i,1)
        console.log(copyArr)
        setarr(copyArr)
    }
  return (
    <div>
 

 <form action="">
    <input type="number" ref={idRef} placeholder='id' />
    <input type="text" ref={taskRef} placeholder='task' />
    <button onClick={handleAddData}>add Task</button>
 </form>


<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Task</th>
      <th scope="col"></th>
   
    </tr>
  </thead>
  <tbody>
   {arr.map((x,index)=>{
    return  <tr>
        <td>{index+1}</td>
    <th scope="row">{x.task}</th>
    <td><button onClick={()=>handleDelete(x,index)} className='btn btn-danger'>delete</button></td>
    
  </tr>
   })}
  
  </tbody>
</table>
   
    </div>
  )
}

export default ExpenseAgain
