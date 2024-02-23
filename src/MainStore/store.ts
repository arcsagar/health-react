import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore/user.reducer";

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;