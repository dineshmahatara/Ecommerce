import { createSlice } from "@reduxjs/toolkit";

const UserSlicer = createSlice({
    name: "User",
    initialState: {
        loggedInUser: null
    },
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload
        }
    }
})

export const {setLoggedInUser} = UserSlicer.actions;
export default UserSlicer.reducer;