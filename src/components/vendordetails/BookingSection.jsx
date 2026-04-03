import { useNavigate } from "react-router-dom";

export default function BookingSection({ vendor, date, time }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6">

      <p className="text-xl font-bold text-purple-600">
        ₹{vendor.price}
      </p>

      <p className="text-sm text-gray-500">
        Starting Price
      </p>

      <button
        onClick={() =>
          navigate(`/booking/${vendor.id}`, {
            state: { date, time },
          })
        }
        className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-semibold"
      >
        Book Now
      </button>

    </div>
  );
}