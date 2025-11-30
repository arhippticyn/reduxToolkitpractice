import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterSlice";
import { ThemeReducers } from "./themeSlice";
import { TodoReducers } from "./TodoSlice";
import { ModalReducer } from "./ModalSlice";
import { LanguageReducers } from "./LanguageSlice";
import { SettingsReducer } from "./settingsSlice";


export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        theme: ThemeReducers,
        todos: TodoReducers,
        modal: ModalReducer,
        lang: LanguageReducers,
        notification: SettingsReducer
    }
})