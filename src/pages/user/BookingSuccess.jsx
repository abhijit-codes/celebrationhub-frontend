import { useLocation, useNavigate } from "react-router-dom";

export default function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const { date, time } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-celebration-gradient">

      <h1 className="text-3xl font-bold mb-4">
        🎉 Booking Confirmed!
      </h1>

      <p className="mb-2">Date: {date}</p>
      <p className="mb-4">Time: {time}</p>

      <button
        onClick={() => navigate("/home")}
        className="bg-white text-black px-6 py-2 rounded"
      >
        Go to Home
      </button>

    </div>
  );
}