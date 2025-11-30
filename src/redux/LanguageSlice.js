import { createSlice } from "@reduxjs/toolkit"

const LanguageInitialState = {
    lang: 'ua'
}

const LanguageSlice = createSlice({
    name: 'lang',
    initialState: LanguageInitialState,
    reducers: {
        setLanguage: (state) => {
            state.lang = state.lang === 'ua' ? 'en' : 'ua'
        }
    }
})

export const { setLanguage } = LanguageSlice.actions

export const LanguageReducers = LanguageSlice.reducer