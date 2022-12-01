import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userData',
    initialState: { username: 'Pepe' },
    reducers: {
        LOG_USER: (state, action) => {},
        LOG_OUT: (state) => {},
    }
})

export const {
    LOG_USER,
    LOG_OUT
} = userSlice.actions;

export default userSlice.reducer;