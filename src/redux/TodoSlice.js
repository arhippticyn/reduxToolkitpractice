import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const TodoInitialState = []

const TodoSlice = createSlice({
    name: 'todos',
    initialState: TodoInitialState,
    reducers: {
        AddTodo: {
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        completed: false,
                        text: text
                    }
                }
            },
            reducer(state, action) {
                state.push(action.payload)
            }
        },
        DeleteTodo: {
            prepare(id) {
                return {
                    payload: id
                }
            },
            reducer(state, action) {
               return state.filter(todo => todo.id !== action.payload)
            }
        },
        ToggleCompeted: {
            prepare(id) {
                return {
                    payload: id
                }
            },
            reducer(state, action) {
                for (const todo of state) {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                }
            }
        }
    }
})

export const { AddTodo, DeleteTodo, ToggleCompeted } = TodoSlice.actions

export const TodoReducers = TodoSlice.reducer