import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
//  let counter = 5 ;

 const addValue=()=>{
  
  // console.log("Clicked",counter)
  // setCounter(counter<=19 ?counter+1:20  );  //basic

  // Interview counter ques
  //ques-> what if we write above statatement of setcounter multiple times
  //Ans->  Then it will also increased by 1 value because they are siilar stataement and usestate divide them into bunch.

  // so for this we have to use setcounter as callback function in this next setcounter execute only when prvone compeletely executed.
  // Now on one click it will increase our value by 3
  setCounter((prevcounter)=>prevcounter+1);
  setCounter((prevcounter)=>prevcounter+1);
  setCounter((prevcounter)=>prevcounter+1);
 }
 const removeValue=()=>{
  

  setCounter(counter>0?counter-1:0);
 }
  return ( 
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br /> 
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
