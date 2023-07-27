import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-slice";
import paginationSlice from "./pagination-slice";

const store = configureStore({
    reducer: { app: appSlice.reducer, pagination: paginationSlice.reducer },
});

export default store;
