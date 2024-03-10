import { configureStore } from "@reduxjs/toolkit";
import navMobileReducer from "./slices/navMobileSlice";

export const store = configureStore({
    reducer: {
        navMobile: navMobileReducer,
    }
})