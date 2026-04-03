import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocation, skipLocation } from "../../features/location/UserLocationSlice";

export default function LocationPermission() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAllowLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );

          const data = await res.json();

          const address =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            "Location detected";

          const locationData = { lat, lng, address };

          // ✅ REDUX
          dispatch(setLocation(locationData));

          // ✅ LOCAL STORAGE
          localStorage.setItem("location", JSON.stringify(locationData));

          navigate("/home");

        } catch (err) {
          console.error(err);

          const fallback = { lat, lng, address: "Location detected" };

          dispatch(setLocation(fallback));
          localStorage.setItem("location", JSON.stringify(fallback));

          navigate("/home");
        }
      },
      () => {
        alert("Location permission denied");
      }
    );
  };

  const handleSkip = () => {
    dispatch(skipLocation());
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-celebration-gradient flex items-center justify-center px-4">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-md">

        <h2 className="text-2xl font-semibold mb-4">
          Enable Location 📍
        </h2>

        <p className="text-gray-500 mb-6">
          We use your location to show nearby vendors
        </p>

        <button
          onClick={handleAllowLocation}
          className="w-full bg-purple-600 text-white py-2 rounded mb-3"
        >
          Allow Location
        </button>

        <button
          onClick={handleSkip}
          className="w-full bg-gray-200 py-2 rounded"
        >
          Not Now
        </button>

      </div>

    </div>
  );
}