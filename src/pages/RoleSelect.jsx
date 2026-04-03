import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRole } from "../features/auth/authSlice";
import { FaUser, FaStore, FaSearchDollar, FaLock, FaBolt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function RoleSelect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const chooseRole = (role) => {
    dispatch(setRole(role));
    role === "user" ? navigate("/user/login") : navigate("/vendor/login");
  };

  return (
    <div className="min-h-screen bg-celebration-gradient flex flex-col items-center py-16 px-6">

      {/* HERO */}
      <img src={logo} alt="logo" className="w-28 mb-6 drop-shadow-lg" />

      <h1 className="text-5xl text-white mb-2 tracking-wide">
        Celebration Hub
      </h1>

      <p className="text-white/90 mb-14 text-lg">
        Plan. Book. Celebrate. ✨ Your Event. Your Choice. ✨
      </p>

      {/* ROLE CARDS */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">

        {/* USER */}
        <div
          onClick={() => chooseRole("user")}
          className="bg-white rounded-xl shadow-lg cursor-pointer border-t-4 border-purple-600 p-8"
        >
          <FaUser className="text-purple-600 text-4xl mb-4" />

          <h2 className="text-xl font-semibold text-gray-800">
            I'm a Customer
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            Find Cameraman, DJ, Tent House and Caterers easily.
          </p>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-md">
            Browse Services
          </button>
        </div>

        {/* VENDOR */}
        <div
          onClick={() => chooseRole("vendor")}
          className="bg-white rounded-xl shadow-lg cursor-pointer border-t-4 border-pink-500 p-8"
        >
          <FaStore className="text-pink-500 text-4xl mb-4" />

          <h2 className="text-xl font-semibold text-gray-800">
            I'm a Vendor
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            Grow your event service business and manage bookings.
          </p>

          <button className="bg-pink-500 text-white px-5 py-2 rounded-md">
            Start Selling
          </button>
        </div>

      </div>

      {/* FEATURES */}
      <div className="mt-20 text-center w-full max-w-5xl">

        <h2 className="text-2xl font-semibold text-white mb-8">
          Why Choose Celebration Hub?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Compare Vendors */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <FaSearchDollar className="text-purple-600 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-800">Compare Vendors</h3>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Find the best vendors for your events
            </p>
          </div>

          {/* Secure Booking */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <FaLock className="text-green-500 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-800">Secure Booking</h3>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Safe and trusted booking system
            </p>
          </div>

          {/* Quick Service */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <FaBolt className="text-yellow-500 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-800">Quick Service</h3>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Quick confirmation from vendors
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}