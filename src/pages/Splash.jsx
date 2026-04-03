import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/role"); // ✅ always go to role
    }, 5000); // ✅ 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

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