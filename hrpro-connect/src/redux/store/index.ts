import { configureStore } from "@reduxjs/toolkit";
import userSignupReducer from "../slice/userSignupSlice"

const store = configureStore({
    reducer:{
        auth:userSignupReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store