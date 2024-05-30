import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";

interface User {
    email: string | null;
    accessToken: string | null;
    uid: string | null;
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


export const loginWithFirebase = createAsyncThunk<User, { email: string, password: string }>(
    'user/signupWithFirebase',
    async ({ email, password }, thunkAPI) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            if (userCredentials.user) {
                if(!userCredentials.user.emailVerified) throw new Error ("Email not verified")
                const accessToken = await userCredentials.user.getIdToken();
                return {
                    email: userCredentials.user.email,
                    accessToken: accessToken,
                    uid: userCredentials.user.uid
                };
            } else {
                return thunkAPI.rejectWithValue("User credentials are not available");
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const userLoginSlice = createSlice({
    name: "user-login",
    initialState,
    reducers: {
        resetUser: (state) => {
            state.User = null;
            state.Loading = false;
            state.Error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginWithFirebase.pending, (state) => {
                state.Loading = true;
                state.Error = null;
            })
            .addCase(loginWithFirebase.fulfilled, (state, action) => {
                state.Loading = false;
                console.log(action.payload)
                state.User = action.payload;
            })
            .addCase(loginWithFirebase.rejected, (state, action) => {
                state.Loading = false;
                state.Error = action.payload as string;
            });
    }
});

export const { resetUser } = userLoginSlice.actions;
export default userLoginSlice.reducer;
