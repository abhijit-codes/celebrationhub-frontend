import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo2.png";

export default function Splash() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigate("/detect-location");   // After login
      } else {
        navigate("/role");              // First open
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-celebration-gradient">
      <div className="text-center animate-logoPop">
        <img
          src={logo}
          alt="Spotless Wash"
          className="w-64 drop-shadow-2xl mx-auto"
        />

        <p className="text-white mt-6 text-lg font-medium">
          Welcome to Spotless
        </p>
      </div>
    </div>
  );
}