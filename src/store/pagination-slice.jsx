import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        increment(state) {
            state.currentPage++;
        },
        decrement(state) {
            state.currentPage--;
        },
    },
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice;
