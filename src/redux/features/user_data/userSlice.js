import { createSlice } from "@reduxjs/toolkit";
import { login, logout, recoverPassword, update } from "./reducers";

export const userSlice = createSlice({
    name: 'userData',
    initialState: JSON.parse(sessionStorage.getItem('user')) 
                        ? {user: JSON.parse(sessionStorage.getItem('user'))} 
                        : {user: {isLogged: false, isAdmin: false}},
    reducers: {
        LOG_IN: login,
        LOG_OUT: logout,
        UPDATE: update,
        RECOVER: recoverPassword
    }
})

export const {
    LOG_IN,
    LOG_OUT,
    UPDATE,
    RECOVER
} = userSlice.actions;

export default userSlice.reducer;