import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userData',
    initialState: JSON.parse(sessionStorage.getItem('user')) ?? { username: '', isLogged: false },
    reducers: {
        LOG_IN: (state, action) => {
            const loggedUser = {
                ...action.payload,
                isLogged: true
            }
            sessionStorage.setItem('user', JSON.stringify(loggedUser));
            state = loggedUser;
        },
        LOG_OUT: (state) => {
            sessionStorage.removeItem('user');
            state = { username: '', isLogged: false }
        },
    }
})

export const {
    LOG_USER,
    LOG_OUT
} = userSlice.actions;

export default userSlice.reducer;