import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Hero from "../../components/userhome/Hero";
import SearchBar from "../../components/userhome/SearchBar";
import VendorList from "../../components/userhome/VendorList";
import CategorySection from "../../components/userhome/CategorySection";

import { setVendors } from "../../features/vendor/vendorslice";
import { vendors as dummyVendors } from "../../data/vendors";

export default function Home() {
  const dispatch = useDispatch();

  // 🔥 Load vendors once
  useEffect(() => {
    dispatch(setVendors(dummyVendors));
  }, [dispatch]);

  return (
    <div className="px-3 pb-6">

      {/* HERO SECTION */}
      <Hero />

      {/* SEARCH BAR */}
      <div className="mt-4">
        <SearchBar />
      </div>

      {/* NEAREST VENDORS */}
      <VendorList />

      {/* ALL SERVICES */}
      <CategorySection />

    </div>
  );
}