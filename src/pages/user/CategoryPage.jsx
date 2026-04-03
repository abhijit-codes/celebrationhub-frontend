import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VendorCard from "../../components/userhome/VendorCard";
import SearchBar from "../../components/userhome/SearchBar";

export default function CategoryPage() {
  const { type } = useParams();

  const vendors = useSelector((state) => state.vendors.list);

  const filtered = vendors.filter(
    (v) => v.category.toLowerCase() === type.toLowerCase()
  );

  return (
    
    <div className="p-4">
        <SearchBar />

      <h2 className="text-lg font-semibold mb-4 text-white capitalize">
        {type} Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {filtered.length > 0 ? (
          filtered.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        ) : (
          <p className="text-white">No vendors found</p>
        )}

      </div>

    </div>
  );
}