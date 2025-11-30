import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterSlice";
import { ThemeReducers } from "./themeSlice";
import { TodoReducers } from "./TodoSlice";


export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        theme: ThemeReducers,
        todos: TodoReducers
    }
})