import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react"; // 👈 ADD

import ImageGallery from "../../components/vendordetails/ImageGallery";
import VendorInfo from "../../components/vendordetails/VendorInfo";
import BookingSection from "../../components/vendordetails/BookingSection";

export default function VendorDetails() {
  const { id } = useParams();
  const vendors = useSelector((state) => state.vendors.list);

  const vendor = vendors.find(v => v.id === parseInt(id));

  // 🔥 ADD STATE HERE
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!vendor) return <p className="text-white">Not found</p>;

  return (
    <div className="p-4 md:flex gap-6">

      {/* LEFT */}
      <div className="md:w-1/2">
        <ImageGallery vendor={vendor} />
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2">

        {/* 🔥 PASS DATE & TIME */}
        <VendorInfo
          vendor={vendor}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />

        {/* 🔥 PASS DATE & TIME */}
        <BookingSection
          vendor={vendor}
          date={date}
          time={time}
        />

      </div>

    </div>
  );
}