// step1 : import configure store
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
// step2 : we use this metho and export a variable it will mostly take an object
export const store = configureStore({
    reducer:todoReducer
});