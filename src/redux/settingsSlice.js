import { createSlice } from "@reduxjs/toolkit"

const NotificationInitialState = {
    notificationsEnabled: false
}

const SettingsSlice = createSlice({
    name: 'notification',
    initialState: NotificationInitialState,
    reducers: {
        toggleNotifications: (state) => {
            state.notificationsEnabled = !state.notificationsEnabled
        }
    }
})

export const { toggleNotifications } = SettingsSlice.actions

export const SettingsReducer = SettingsSlice.reducer