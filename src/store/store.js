import { configureStore } from "@reduxjs/toolkit";
import { animalsSlice } from "./animals";

export const store = configureStore({
    reducer: {
        animals: animalsSlice.reducer,
    }
})