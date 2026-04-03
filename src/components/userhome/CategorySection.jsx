import { useSelector } from "react-redux";
import VendorCard from "./VendorCard";

export default function CategorySection() {
  const { list, filtered } = useSelector((state) => state.vendors);

  const isFiltered = filtered.length > 0;

  const displayVendors = isFiltered ? filtered : list;

  return (
    <div className="mb-10">

      <h2 className="text-lg font-semibold mb-4 text-white">
        All Services
      </h2>

      {/* 🔥 EMPTY STATE */}
      {isFiltered && displayVendors.length === 0 ? (
        <p className="text-white text-center">
          No vendors found 😔
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {displayVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}

        </div>
      )}

    </div>
  );
}