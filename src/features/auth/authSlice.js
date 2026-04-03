import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  isAuthenticated: false,
  user: null, // 👈 ADD THIS
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

    // 🔥 LOGIN WITH USER DATA
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // 👈 STORE USER
    },

    // 🔥 LOGOUT
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      state.user = null;
    },
  },
});

export const { setRole, login, logout } = authSlice.actions;
export default authSlice.reducer;