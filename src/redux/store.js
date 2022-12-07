import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user_data/userSlice';

export const store = configureStore({
    reducer: {
        userData: userReducer,
    }
})