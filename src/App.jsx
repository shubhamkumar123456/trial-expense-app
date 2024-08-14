
import About from './About';
import './App.css';
import Contact from './Contact';
import Counter from './Counter';
import Expense from './Expense';
import Form from './Form';
import Form1 from './Form1';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Trial from './Trial';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import ExpenseAgain from './ExpenseAgain';
import EffectConcept from './EffectConcept';
import { useState } from 'react';

function App() {

  let a = [3,4,6,10]
  console.log(a)
  let x= 5
  console.log(x);

  let arr = [50,10,7,3]
  let obj ={
    name:"abc",
    age:"34"
  }
  let y=6
  const [child, setchild] = useState("");

  function xyz(ans){
    console.log(ans)
    setchild(ans)
  }
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/' element = {<Homepage ans = {child} value={x}/>}/>
                <Route path='/about' element = {<About xyz ={xyz}/>}/>
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/xyz' element = {<Counter a={a}/>}/>
                <Route path='/form' element = {<Form/>}/>
                <Route path='/form1' element = {<Form1/>}/>
                <Route path='/useeffect' element = {<EffectConcept/>}/>
                <Route path='/expense' element = {<Expense/>}/>
                
            </Routes>

          </BrowserRouter>
    </div>


  );
}

export default App;
