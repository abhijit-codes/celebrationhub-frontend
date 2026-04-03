import { useSelector, useDispatch } from "react-redux";
import { setSelectedAddress } from "../../features/address/addressSlice";
import AddressCard from "./AddressCard";
import { useState } from "react";
import AddAddressModal from "./AddAddressModal"; // 👈 IMPORT

export default function AddressModal({ close }) {
  const addresses = useSelector((state) => state.address.list);
  const dispatch = useDispatch();

  const [showAddModal, setShowAddModal] = useState(false); // 👈 STATE

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[400px]">

        <h2 className="font-semibold mb-4">
          Select Address
        </h2>

        {/* ADDRESS LIST */}
        <div className="space-y-3">
          {addresses.map((addr) => (
            <AddressCard
              key={addr.id}
              address={addr}
              onSelect={(a) => {
                dispatch(setSelectedAddress(a));
                close();
              }}
            />
          ))}
        </div>

        {/* ➕ ADD NEW ADDRESS BUTTON */}
        <button
          onClick={() => setShowAddModal(true)}
          className="mt-4 w-full border py-2 rounded-lg hover:bg-gray-100"
        >
          + Add New Address
        </button>

        {/* CLOSE */}
        <button
          onClick={close}
          className="mt-2 text-red-500 text-sm"
        >
          Close
        </button>

      </div>

      {/* 🔥 ADD ADDRESS MODAL */}
      {showAddModal && (
        <AddAddressModal close={() => setShowAddModal(false)} />
      )}

    </div>
  );
}