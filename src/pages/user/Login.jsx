import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { sendOTP, verifyOTP } from "../../api/AuthApi";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SEND OTP
  const handleSendOtp = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await sendOTP(form);
      alert("OTP sent to your email ✅");
      setShowOtp(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await verifyOTP({
        email: form.email,
        otp,
      });

      // ✅ SAVE IN REDUX
      dispatch(login(res.data.user));

      // ✅ SAVE IN LOCAL STORAGE
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful 🎉");

      navigate("/location");

    } catch (err) {
      console.error(err);
      alert("Invalid or expired OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-celebration-gradient flex items-center justify-center px-4">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          User Login
        </h2>

        {!showOtp ? (
          <form autoComplete="off">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="w-full border p-2 mb-4 rounded"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full border p-2 mb-4 rounded"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              className="w-full border p-2 mb-4 rounded"
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>

          </form>
        ) : (
          <div>

            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border p-2 mb-4 rounded"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-green-500 text-white py-2 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

          </div>
        )}

      </div>

    </div>
  );
}