import { configureStore } from "@reduxjs/toolkit";
import { HeroSlice } from "./HeroSlice/HeroSlice";
export const store = configureStore({
    reducer: {
        Hero: HeroSlice.reducer,
    },
});