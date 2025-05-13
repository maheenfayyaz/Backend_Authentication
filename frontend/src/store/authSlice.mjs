import { createSlice } from "@reduxjs/toolkit";
name: "auth";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token"),
        userID: localStorage.getItem("userID"),
        userName: '',
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.userID = action.payload.userID;
            state.userName = action.payload.userName;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("userID");
            state.isAuthenticated = false;
            state.userName = '';  
        },
        },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;