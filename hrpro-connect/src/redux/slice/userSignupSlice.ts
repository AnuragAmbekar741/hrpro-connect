import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/index";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

interface User {
    email: string | null;
    accessToken: string | null;
    uid: string | null;
    role:string|null;
}

interface InitialState {
    User: User | null;
    Loading: boolean;
    Error: string | null;
}

const initialState: InitialState = {
    User: null,
    Loading: false,
    Error: null,
};


export const signupWithFirebase = createAsyncThunk<User, { email: string, password: string,role:string }>(
    'user/signupWithFirebase',
    async ({ email, password,role }, thunkAPI) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            if (userCredentials.user) {
                await sendEmailVerification(userCredentials.user);
                const accessToken = await userCredentials.user.getIdToken();
                return {
                    email: userCredentials.user.email,
                    accessToken: accessToken,
                    uid: userCredentials.user.uid,
                    role : role
                };
            } else {
                return thunkAPI.rejectWithValue("User credentials are not available");
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const userSignupSlice = createSlice({
    name: "user-signup",
    initialState,
    reducers: {
        resetUserSignup: (state) => {
            state.User = null;
            state.Loading = false;
            state.Error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupWithFirebase.pending, (state) => {
                state.Loading = true;
                state.Error = null;
            })
            .addCase(signupWithFirebase.fulfilled, (state, action) => {
                state.Loading = false;
                console.log(action.payload)
                state.User = action.payload;
            })
            .addCase(signupWithFirebase.rejected, (state, action) => {
                state.Loading = false;
                state.Error = action.payload as string;
            });
    }
});

export const { resetUserSignup } = userSignupSlice.actions;
export default userSignupSlice.reducer;
