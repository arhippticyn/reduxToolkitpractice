import { createSlice } from "@reduxjs/toolkit"

const themeInitialState = {theme:'light'}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: themeInitialState,
    reducers: {
        ToggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

export const {ToggleTheme} = ThemeSlice.actions
export const ThemeReducers = ThemeSlice.reducer
