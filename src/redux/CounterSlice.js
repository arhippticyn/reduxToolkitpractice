import { createSlice } from "@reduxjs/toolkit"

const CounterInitialState = 0

const CounterSlice = createSlice({
    name: 'counter',
    initialState: CounterInitialState,
    reducers: {
        Increments(state) {
                return state + 1 
        },
        Decrements(state) {
                return state - 1 
        },
        IncrementByAmount: {
            reducer(state, action) {
                return state + action.payload
            },
            prepare(value) {
                return {
                    payload: value
                }
            }
        }
    }
})

export const { Increments, Decrements, IncrementByAmount } = CounterSlice.actions

export const CounterReducer = CounterSlice.reducer