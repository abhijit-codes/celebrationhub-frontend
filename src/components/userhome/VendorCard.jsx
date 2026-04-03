import Rating from "../usercommon/Rating";
import Distance from "../usercommon/Distance";
import { useNavigate } from "react-router-dom";

export default function VendorCard({ vendor }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      {/* IMAGE */}
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-32 object-cover"
      />

      {/* CONTENT */}
      <div className="p-3">

        {/* NAME */}
        <h3 className="font-semibold text-gray-800 text-sm">
          {vendor.name}
        </h3>

        {/* RATING + DISTANCE */}
        <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
          <Rating value={vendor.rating} />
          <Distance value={vendor.distance} />
        </div>

        {/* PRICE */}
        <p className="text-purple-600 font-bold mt-2">
          ₹{vendor.price}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate(`/vendor/${vendor.id}`)}
          className="mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-1 rounded text-sm"
        >
          View Details
        </button>

      </div>

    </div>
  );
}