import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggin: false
};

const headerSlice = createSlice({
    name: "headerState",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggin = true;
        },
        logoutState: (state) => {
            state.isLoggin = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logoutState } = headerSlice.actions;

// A selector
export const headerSelector = (state) => state.headerState;

export default headerSlice.reducer;