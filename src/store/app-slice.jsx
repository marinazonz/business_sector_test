import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    allNotes: [],
    error: "",
    dataPerPage: 10,
};

export const fetchNotes = createAsyncThunk("store/fetchNotes", () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.data;
        });
});

const appSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.allNotes = action.payload;
            state.error = "";
        });
        builder.addCase(fetchNotes.rejected, (state, action) => {
            state.loading = false;
            state.allNotes = [];
            state.error = action.error.message;
        });
    },
});

export const appActions = appSlice.actions;

export default appSlice;
