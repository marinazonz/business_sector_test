import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    allNotes: [],
    searchedNotes: [],
    error: "",
    dataPerPage: 10,
    searchField: "",
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
    reducers: {
        setNotesAfterSearch(state, action) {
            state.searchedNotes = action.payload;
        },
        setSeacrhField(state, action) {
            state.searchField = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.loading = false;
            state.allNotes = action.payload;
            state.searchedNotes = action.payload;
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
