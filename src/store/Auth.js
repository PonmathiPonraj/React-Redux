import { createSlice } from "@reduxjs/toolkit";

const intialAuthState = {
    isAuthenthicated:false,
}

const authSlice=createSlice({
    name: 'authentication',
    initialState: intialAuthState,
    reducers: {
        isLogin(state) {
            state.isAuthenthicated=true;
        },
        isLogout(state) {
            state.isAuthenthicated=false;
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;