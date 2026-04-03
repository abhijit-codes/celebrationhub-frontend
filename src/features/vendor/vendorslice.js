import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filtered: [],
  selectedVendor: null,
  selectedCategory: null, // 👈 NEW
  loading: false,
  error: null,
};

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {

    setVendors: (state, action) => {
      state.list = action.payload;
      state.filtered = []; // 👈 RESET FILTER
    },

    setFilteredVendors: (state, action) => {
      state.filtered = action.payload;
    },

    clearFilter: (state) => {
      state.filtered = [];
    },

    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSelectedVendor: (state, action) => {
      state.selectedVendor = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearVendors: (state) => {
      state.list = [];
      state.filtered = [];
      state.selectedVendor = null;
      state.selectedCategory = null;
      state.error = null;
    },
  },
});

export const {
  setVendors,
  setFilteredVendors,
  clearFilter,
  setCategory,
  setSelectedVendor,
  setLoading,
  setError,
  clearVendors,
} = vendorSlice.actions;

export default vendorSlice.reducer;