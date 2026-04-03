import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: null,
  lng: null,
  address: "",
  isLocationEnabled: false, // 👈 NEW
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.address = action.payload.address || "";
      state.isLocationEnabled = true;
    },

    skipLocation: (state) => {
      state.isLocationEnabled = false;
      state.lat = null;
      state.lng = null;
      state.address = "";
    },

    clearLocation: () => initialState,
  },
});

export const { setLocation, skipLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;