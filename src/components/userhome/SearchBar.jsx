import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredVendors } from "../../features/vendor/vendorslice";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const vendors = useSelector((state) => state.vendors.list);

  const handleSearch = () => {
    const keyword = search.toLowerCase().trim();

    // 🔥 FILTER LOGIC
    const filtered = vendors.filter(
      (v) =>
        v.name.toLowerCase().includes(keyword) ||
        v.category.toLowerCase().includes(keyword)
    );

    dispatch(setFilteredVendors(filtered));
  };

  return (
    <div className="bg-white rounded-xl shadow-md flex items-center px-3 py-2 mb-6">

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search services (DJ, Caterer...)"
        className="flex-1 outline-none text-gray-700 px-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* BUTTON */}
      <button
        onClick={handleSearch}
        className="bg-purple-600 text-white p-2 rounded-lg"
      >
        <FaSearch />
      </button>

    </div>
  );
}