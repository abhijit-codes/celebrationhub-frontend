import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import VendorCard from "./VendorCard";
import { setVendors } from "../../features/vendor/vendorslice";
import { vendors as dummyVendors } from "../../data/vendors";
import { getDistance } from "../utils/distance";

export default function VendorList() {
  const dispatch = useDispatch();

  const vendors = useSelector((state) => state.vendors.list);
  const location = useSelector((state) => state.location);

  // 🔥 Load dummy vendors (initial)
  useEffect(() => {
    dispatch(setVendors(dummyVendors));
  }, [dispatch]);

  // 🔥 Calculate distance + sort
  const processedVendors = vendors
    .map((v) => {
      let distance = null;

      if (location.isLocationEnabled) {
        distance = getDistance(
          location.lat,
          location.lng,
          v.lat,
          v.lng
        );
      }

      return { ...v, distance };
    })
    .sort((a, b) => {
      if (!a.distance) return 1;
      if (!b.distance) return -1;
      return a.distance - b.distance;
    })
    .slice(0, 10); // only 10 vendors

  return (
    <div className="mb-8">

      <h2 className="text-lg font-semibold mb-3 text-white">
        Nearest Vendors
      </h2>

      <div className="flex gap-4 overflow-x-auto">

        {processedVendors.map((vendor) => (
          <div key={vendor.id} className="min-w-[200px]">
            <VendorCard vendor={vendor} />
          </div>
        ))}

      </div>

    </div>
  );
}