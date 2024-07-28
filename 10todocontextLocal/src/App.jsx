// import { useState , useEffect } from 'react'
// import {TodoProvider} from './contexts'
// import './App.css'
// import TodoForm from './components/TodoForm'
// import TodoItem from './components/TodoItem'

// function App() {
//   // is state m hamare paas ek nahi saare hi Todo h  
//    const [todos,setTodos]=useState([])
 
//   //  isme hm todo k andar new todo add krre h , throuh useState todos, And todo is an object which contain id , todo or compeleted
//   // Here we get prev state of Todo using concept  of prev in settodo through spread operator(... destructuring) and then then add newone
//    const addTodo=(todo)=>{
//       setTodos((prev)=>[{id:Date.now(),...todo},...prev])
//    }

//   //Todo hamara ek array of object h to hm usme loop laga kr saare objects nikalenge or jis bhi object ki id match kr gayi hm use update kr denge


//    const updateTodo=(id,todo)=>{
//        setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id===id?todo:prevTodo})) 
//    }

//   //  Deletetodo : hmare paad ek array h or hme us array m jo hme id di hui h wp waaali id ka object yaani todo (jo ki objet h )delete kena h
//   // filter method  create a new array 
//   const deleteTodo=(id)=>{
//        setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
//   }

//   // yaha pr hme bss jo hamare todo object m compelete waali value h usse toggle krna hai
//   // yaha pr hme ager hamari id mil jaati h to hmne phele destructure m spread operator(...)lga kr saari prev state aise hi rakhi bss usme completed ko change kr dia

//   const toggleCompelete=(id)=>{
//      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prev,completed:!prevTodo.completed}:prevTodo))
//   }

//   // Local storage waala part
//   // ab local storage hme  value string m deta h to hme use json m convert krna padega JSON.parse() ki help  se
//   // local storage m hme jb bhi (getitem) krni hoti h to bs localstorage.getitem("key") ka naam dena hota h


//   // useeffect
//   // yaha pr jaise hi hm apne page pr aaenge waise hi hm local storage se getitem krenge
//   useEffect(
//     ()=>{ 
//       const todos= JSON.parse(localStorage.getItem("todos"))
//       // agr hmare paas todos h to hm use set krdenge

//       if(todos && todos.length>0){
//         setTodos(todos)
//       }

//     },

//     []
//   )

//   // Now ab hme jb bhi item todos  m add ho to wo hme localstorage m bhi add kerni hoti h 
//   // to yaha pr hm ek useEffect likhenge jiski dependencies m todo denge hm localstorage m setitem kr denge
//   // yaha pr hmara localstorage.setitem hamari key:value pair leta h  and value hamari string ki form m hoti h , since yaha pr hamara todo array ki form m h to hm yaha pr JSON.stringify() kre h
//   useEffect(
//     ()=>{localStorage.setItem("todos",JSON.stringify(todos))},
//     [todos]
//   )
//   return (

//     // Wrap whole element or children in TodoProvider which is imported from constexts i.e. index.js
//     <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompelete}}>
//       <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                        <TodoForm/>
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         {todos.map((todo)=>{
//                         {  console.log(todo)}
//                           <div key={todo.id} className='w-full'>
//                             <TodoItem todo={todo}/>
//                           </div>
//                         })}
//                     </div>
//                 </div>
//             </div>
//     </TodoProvider>
//   )
// }

// export default App
import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
