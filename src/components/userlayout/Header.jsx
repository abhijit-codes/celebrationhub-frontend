import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

export default function Header() {
  const location = useSelector((state) => state.location);
  const user = useSelector((state) => state.auth.user); // ✅ FIXED

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">

      {/* LEFT - LOGO */}
      <div className="flex items-center gap-2 text-white">
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        <h1 className="font-bold text-lg">Celebration Hub</h1>
      </div>

      {/* CENTER - LOCATION */}
      <button className="bg-white text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium shadow hover:scale-105 transition">

        {location.isLocationEnabled
          ? `📍 ${location.address || "Detected"}`
          : "Select Location"}

      </button>

      {/* RIGHT - PROFILE */}
      <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow hover:scale-105 transition">

        {/* PROFILE ICON */}
        <div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        {/* NAME */}
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          {user?.name || "Profile"}
        </span>

      </button>

    </div>
  );
}