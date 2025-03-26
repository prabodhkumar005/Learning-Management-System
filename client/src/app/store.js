import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Correct the spelling here
import { authApi } from "@/features/api/authApi"; // Ensure alias is correct

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
