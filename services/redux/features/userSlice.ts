import { InitialState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: InitialState = {
    currentUser: null
};
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        user: (state, action) => {
            state.currentUser = action.payload;
        },
        logout: (state, action) => {
            state.currentUser = null;
        },
    },
});

export const { user, logout } = userSlice.actions;
export const userData = (state: RootState) => state.user;
export default userSlice.reducer;
