import { configureStore } from "@reduxjs/toolkit";
import navMobileReducer from "./slices/navMobileSlice";
import navDesktopReducer from "./slices/navDesktopSlice";

export const store = configureStore({
    reducer: {
        navMobile: navMobileReducer,
        navDesktop: navDesktopReducer,
    }
})