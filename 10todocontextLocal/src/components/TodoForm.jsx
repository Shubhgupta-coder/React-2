import React,{useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo,setTodo]=useState("");  // ye hmara individual todo k lie h yahapr ye todoo hamara jo todos object h usme jo hamari todo field h msg ki lie wo h ye

    // ye hmne usetodo context se lia  h 
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault();

        // agr msg hi nhi h to kyu hi add krna
        if(!todo)  return;

        // nhi to addTodo k andar object pass krdenge kuyki hmara todo array of object hi h
        // ye addto hamare app.jsx m defined h 

        // yaha pr hmne id:date.Now() kyuki wo already defined  h function m
        addTodo({todo,completed:false})
        setTodo(""); //add hone k baad setTodo ko empty
    }
    return (
        <form  onSubmit={add}className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>{setTodo(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
export default TodoForm;
