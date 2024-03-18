import {configureStore} from "@reduxjs/toolkit";
import TestSlice from "./TestSlice";

export const store = configureStore({
    reducer: {
        test : TestSlice
    }
})