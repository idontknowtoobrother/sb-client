import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../config/api";

export const loginUser =  createAsyncThunk(
    'auth/login',
    async (userCredentials)=> {
        const request = await axios.post(`${api.apiEndpoint}/auth/login`, userCredentials, {
            withCredentials: true
        });
        const response = await request.data;
        return response;
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        const request = await axios.post(`${api.apiEndpoint}/auth/logout`, {
            withCredentials: true
        });
        const response = await request.data;
        return response;
    }
);

export const signupUser = createAsyncThunk(
    'auth/register',
    async (signupCredentials) => {
        const request = await axios.post(`${api.apiEndpoint}/auth/register`, signupCredentials, {
            withCredentials: true
        });
        const response = await request.data;
        return response;
    }
);


export const patchUser = createAsyncThunk(
    'user/patch',
    async (patchUserData) => {
        console.log(`${api.apiEndpoint}/users/${patchUserData.userId}`)
        const request = await axios.patch(`${api.apiEndpoint}/users/${patchUserData.userId}`, patchUserData, {
            withCredentials: true
        });
        const response = await request.data;
        return response;
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
        // login
        .addCase(loginUser.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if (action.error.message === 'Request failed with status code 401') {
                state.error = 'Invalid credentials';
                return;
            }
            state.error = action.error.message;
        })

        // logout
        .addCase(logoutUser.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
        })

        // signup
        .addCase(signupUser.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
        })

        // patch
        .addCase(patchUser.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(patchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(patchUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;