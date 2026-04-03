export default function AddressCard({ address, onSelect }) {
  return (
    <div
      onClick={() => onSelect(address)}
      className="border p-3 rounded-lg cursor-pointer hover:border-blue-500"
    >
      <p className="font-semibold">{address.name}</p>
      <p className="text-sm">{address.addressLine1}</p>
      <p className="text-sm">{address.city}, {address.state}</p>
      <p className="text-sm">📞 {address.phone}</p>
    </div>
  );
}