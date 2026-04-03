import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Splash from "../pages/Splash";
import RoleSelect from "../pages/RoleSelect";
import Login from "../pages/user/Login";
import LocationPermission from "../pages/user/LocationPermission";
import Home from "../pages/user/Home";
import VendorDetails from "../pages/user/VendorDetails";
import Booking from "../pages/user/Booking";
import BookingSuccess from "../pages/user/BookingSuccess";
import CategoryPage from "../pages/user/CategoryPage";

import UserLayout from "../components/userlayout/UserLayout";

import { setLocation } from "../features/location/UserLocationSlice";
import { login } from "../features/auth/authSlice";

export default function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    // ✅ Restore user
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      dispatch(login(JSON.parse(savedUser)));
    }

    // ✅ Restore location
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      dispatch(setLocation(JSON.parse(savedLocation)));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Splash />} />
        <Route path="/role" element={<RoleSelect />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/location" element={<LocationPermission />} />

        <Route element={<UserLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/category/:type" element={<CategoryPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}