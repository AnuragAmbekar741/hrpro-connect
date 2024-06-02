import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import {auth} from "../../firebase/index"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

interface User {
    email: string | null;
    accessToken: string | null;
    uid: string | null;
    role:string | null;
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

export const continueWithGoogle = createAsyncThunk<User,{role:string}>(
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





const userGoolgeAuth = createSlice({
    name:"userGoogleAuth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder
      .addCase(continueWithGoogle.pending, (state) => {
        state.Loading = true;
        state.Error = null;
      })
      .addCase(continueWithGoogle.fulfilled, (state, action) => {
        state.Loading = false;
        state.User = action.payload;
      })
      .addCase(continueWithGoogle.rejected, (state, action) => {
        state.Loading = false;
        state.Error = action.payload as string;
      });
  }
})

export default userGoolgeAuth.reducer;
