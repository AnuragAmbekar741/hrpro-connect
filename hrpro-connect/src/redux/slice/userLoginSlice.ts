import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/index";
import { signInWithEmailAndPassword,signOut,signInWithPopup, GoogleAuthProvider,sendPasswordResetEmail } from "firebase/auth";




interface User {
    email: string | null;
    accessToken: string | null;
    uid: string | null;
    role:string | null
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


export const loginWithFirebase = createAsyncThunk<User, { email: string, password: string,role:string }>(
    'user/loginWithFirebase',
    async ({ email, password, role }, thunkAPI) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            if (userCredentials.user) {
                if(!userCredentials.user.emailVerified) throw new Error ("Email not verified")
                const accessToken = await userCredentials.user.getIdToken();
                return {
                    email: userCredentials.user.email,
                    accessToken: accessToken,
                    uid: userCredentials.user.uid,
                    role:role
                };
            } else {
                return thunkAPI.rejectWithValue("User credentials are not available");
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginWithGoogle = createAsyncThunk<User,{role:string}>(
  'user/signInWithGoogle',
  async ({role}, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const accessToken = await userCredential.user.getIdToken();
      return {
        email: userCredential.user.email,
        accessToken: accessToken,
        uid:userCredential.user.uid,
        role:role
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutFirebase = createAsyncThunk(
    'user/signoutFirebase',
    async(_,thunkAPI)=>{
        try{
            await signOut(auth)
        }
        catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }   
    }
)

const userLoginSlice = createSlice({
    name: "user-login",
    initialState,
    reducers: {
        resetUserLogin: (state) => {
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
            })
            .addCase(signOutFirebase.pending, (state) => {
                state.Loading = true;
                state.Error = null;
            })
            .addCase(signOutFirebase.fulfilled, (state) => {
                state.Loading = false;
                state.User = null;
            })
            .addCase(signOutFirebase.rejected, (state, action) => {
                state.Loading = false;
                state.Error = action.payload as string;
            })
            .addCase(loginWithGoogle.pending, (state) => {
                state.Loading = true;
                state.Error = null;
            })
            .addCase(loginWithGoogle.fulfilled, (state, action) => {
              state.Loading = false;
              state.User = action.payload;
            })
            .addCase(loginWithGoogle.rejected, (state, action) => {
              state.Loading = false;
              state.Error = action.payload as string;
            })
            
        }
});

export const { resetUserLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;
