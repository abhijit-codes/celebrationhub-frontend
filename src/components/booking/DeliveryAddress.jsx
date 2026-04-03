import { useSelector } from "react-redux";

export default function DeliveryAddress({ openModal }) {
  const selected = useSelector(state => state.address.selected);

  if (!selected) {
    return (
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Select Address
      </button>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">

      <h3 className="font-semibold mb-2">Delivery Address</h3>

      <p>{selected.name}</p>
      <p>{selected.addressLine1}</p>
      <p>{selected.city}, {selected.state}</p>
      <p>{selected.phone}</p>

      <button
        onClick={openModal}
        className="mt-2 text-blue-600 text-sm"
      >
        Change Address
      </button>

    </div>
  );
}