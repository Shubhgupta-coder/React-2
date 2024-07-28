import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice';
function AddTodo() {

    const [input,setInput]=useState('')
    // How to use dispatch here
    
    const dispatch = useDispatch();

    // now addtoHandler function m hme store m item daakni h mtlb hme dispatch ka use kerna h 

    const addtoHandler=(e)=>{
          e.preventDefault();
    
        //   Most imp: Dispath reducer ko use krte hue store k andar value change krta h 
        // dispatchk andar hi hm reducers ko call krte h 
        dispatch(addTodo(input)) //or yaha pr hmne action bjhej dia
        setInput('')
    }
  return (
    <div>
       <form id="btn" onSubmit={addtoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
   
        className= "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
      {/* {input.length>1?document.getElementById("btn").disabled=false:alert("Empty Notes")} */}
        Add Todo
      </button>
    </form>
    </div>
  )
}

export default AddTodo


// import React, {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {addTodo} from '../features/todo/todoSlice' 

// function AddTodo() {

//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()

//     const addTodoHandler = (e) => {
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')
//     }

//   return (
//     <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
//       <input
//         type="text"
//         className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         placeholder="Enter a Todo..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Add Todo
//       </button>
//     </form>
//   )
// }

// export default AddTodo
