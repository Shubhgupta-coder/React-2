// // here we took slicejust to ensure the naming convention of redux tool kit

// // nanoid generate unique id e.g->jo hmne 10th project m date ko li thi wahi unique id
// import { createSlice , nanoid} from "@reduxjs/toolkit";

// // This is the initial state of store
// // in this one functionaliy we gave is a todo we can gave more such functionality
// const initialState ={
//     todos:[{id:1,text:"hello world"}]
// }

// // Now we create a slice named as a todoslice
// export const todoSlice = createSlice({
//     // name is a general property
//      name:'todo',

//      initialState,

 //      reducers:{
//         // and these function always consist of state and action as a parameter
//         // state: state give access to ki kya kya hamara initial state m pada hua h us ki kya value h  uska acces degi .ie current situation of initial state
//         // actions : actions are just  value for eg : hame delete todo k lie ek id chaiye

//         addTodo:(state,action)=>{
//             // todo banate h
//             const todo =
//             {   
//                 id:nanoid(),  //here we use nano id to genertae new id
//                 text:action.payload  // text hmne action se lia h action.payload ki help se ,  payload is also an object
//             }
//             //  ab hme todo state k andar push krna h 
//             // state se hmne todos lie or todos k andar jo hmne ek todo banaya h use push kr dia
//             state.todos.push(todo)
//         },
//         removeTodo:(state,action)=>{
//             // yaha pr hmne removeTodo k dispatch function k andar id bheji thi to hm yaha pr action.payload se  id check kr rahe h 
//             state.todos=state.todos.filter((todo)=>todo.id!==action.payload)

//         }
//      }
 
// })  

// yaha pr hm do cheez export krte h , ek to individual reducers (like addTodo,removeTodo) or ek saare reducers 
// // Now hme reducrss ki functionality ko individually export krna padta h 
// // in reducers ki functionality ki heklp se hi hm apne state ko update krte h 
// export const {addTodo,removeTodo}=todoSlice.actions

// // yaha pr hm sare reducers ko export kr rahe h 
// export default todoSlice.reducer



//  i dont know why above code show erroer . Kuch smjh ni aya to upr se comment padh lena
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer    