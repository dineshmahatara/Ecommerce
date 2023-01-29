import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth_svc } from "../services/auth.service";

export const getLoggedInUser = createAsyncThunk(
    "User/getLoggedInUser", 
    async(data={}, thunkAPI) => {
        let token = localStorage.getItem('mern15_token') ?? null;
        if(token) {
            let auth_user = await auth_svc.getLoggedInUser();
            if(auth_user) {
                return auth_user.result;
            } else {
                throw null
            }
        } else {
            throw null
        }
    }
)

const UserSlicer = createSlice({
    name: "User",
    initialState: {
        loggedInUser: null
    },
    reducers: {
        setLoggedInUser: (state, action) => {
            console.log("Action: ", action);
            state.loggedInUser = action.payload
        }
    },
    extraReducers: (builders) => {
        builders.addCase(getLoggedInUser.fulfilled, (state, action) => {
            state.loggedInUser = action.payload
        })
        builders.addCase(getLoggedInUser.rejected, (state, action) => {
            state.loggedInUser = null
            //window.location.href='/login'
        })
    }
})

export const {setLoggedInUser} = UserSlicer.actions;
export default UserSlicer.reducer;