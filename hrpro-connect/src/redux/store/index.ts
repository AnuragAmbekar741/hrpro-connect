import { configureStore } from "@reduxjs/toolkit";
import userSignupReducer from "../slice/userSignupSlice"
import userLoginReducer from "../slice/userLoginSlice";
import userGoogleAuthReducer from "../slice/userGoogleAuthSlice"

const store = configureStore({
    reducer:{
        userSignup:userSignupReducer,
        userLogin:userLoginReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store