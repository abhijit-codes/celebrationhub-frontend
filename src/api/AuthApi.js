import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth";

// 🔥 SEND OTP
export const sendOTP = async (data) => {
  return await axios.post(`${BASE_URL}/send-otp`, data);
};

// 🔥 VERIFY OTP
export const verifyOTP = async (data) => {
  return await axios.post(`${BASE_URL}/verify-otp`, data);
};