import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],          // all addresses
  selected: null,    // selected address
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {

    // 🔥 set initial addresses (from dummy or API)
    setAddresses: (state, action) => {
      state.list = action.payload;
    },

    // ➕ add new address
    addAddress: (state, action) => {
      state.list.push(action.payload);
    },

    // 📌 select address
    setSelectedAddress: (state, action) => {
      state.selected = action.payload;
    },

    // ❌ remove address
    removeAddress: (state, action) => {
      state.list = state.list.filter(
        (addr) => addr.id !== action.payload
      );
    },

    // ✏️ update address
    updateAddress: (state, action) => {
      const index = state.list.findIndex(
        (addr) => addr.id === action.payload.id
      );

      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    // 🧹 clear all
    clearAddress: (state) => {
      state.list = [];
      state.selected = null;
    },
  },
});

export const {
  setAddresses,
  addAddress,
  setSelectedAddress,
  removeAddress,
  updateAddress,
  clearAddress,
} = addressSlice.actions;

export default addressSlice.reducer;