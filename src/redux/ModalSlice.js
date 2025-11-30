import { createSlice } from "@reduxjs/toolkit"

const ModalInitialState = false

const ModalSlice = createSlice({
    name: 'modal',
    initialState: ModalInitialState,
    reducers: {
        openModal: () => {
            return true
        },
        closeModal: () => {
            return false
        }
    }
})

export const { openModal, closeModal } = ModalSlice.actions

export const ModalReducer = ModalSlice.reducer