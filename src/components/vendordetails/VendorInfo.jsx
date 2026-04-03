import Rating from "../usercommon/Rating";
import Distance from "../usercommon/Distance";
import { useSelector } from "react-redux";
import { getDistance } from "../utils/distance";

export default function VendorInfo({
  vendor,
  date,
  setDate,
  time,
  setTime,
}) {
  const location = useSelector((state) => state.location);

  let distance = null;

  if (location.isLocationEnabled) {
    distance = getDistance(
      location.lat,
      location.lng,
      vendor.lat,
      vendor.lng
    );
  }

  return (
    <div className="text-white">

      <h2 className="text-2xl font-bold">{vendor.name}</h2>

      <p className="text-white/70 capitalize mt-1">
        {vendor.category}
      </p>

      <div className="flex gap-4 mt-3">
        <Rating value={vendor.rating} />
        <Distance value={distance} />
      </div>

      <p className="mt-4 text-white/80">
        High-quality {vendor.category} services for weddings, parties, and events.
      </p>

      {/* 🔥 DATE */}
      <div className="mt-4">
        <label className="text-sm">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mt-1 p-2 rounded text-black"
        />
      </div>

      {/* 🔥 TIME */}
      <div className="mt-3">
        <label className="text-sm">Select Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mt-1 p-2 rounded text-black"
        />
      </div>

    </div>
  );
}