import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: "user-reducer",
    initialState: {
        userdata: {name: 'no name'}
    },
    reducers: {
        setUserData: (state,action) => {
            state.userdata = action.payload.userdata
        }
    }
});

export const {setUserData} = userReducer.actions

export default userReducer.reducer;