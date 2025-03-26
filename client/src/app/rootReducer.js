import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"; // Make sure this path is correct
import { authApi } from "@/features/api/authApi.js"; // Make sure the alias is configured properly

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,  // Connects the authApi reducer
    auth: authReducer, // Combines the authSlice reducer
});

export default rootReducer;
