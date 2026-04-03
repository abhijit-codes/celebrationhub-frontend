import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userslice";
import locationReducer from "../features/location/UserLocationSlice";
import vendorReducer from "../features/vendor/vendorslice";
import addressReducer from "../features/address/addressSlice"; // 👈 ADD THIS

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    location: locationReducer,
    vendors: vendorReducer,
    address: addressReducer, // 👈 IMPORTANT
  },
});