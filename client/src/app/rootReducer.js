import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"; // Make sure this path is correct
import { authApi } from "@/features/api/authApi.js"; // Make sure the alias is configured properly
import { courseApi } from "@/features/api/courseApi.js";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,  // Connects the authApi reducer
    [courseApi.reducerPath]:courseApi.reducer,
    auth: authReducer, // Combines the authSlice reducer
});

export default rootReducer;
