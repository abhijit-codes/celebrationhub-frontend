export default function Distance({ value }) {
  if (!value) return <span>-- km</span>;

  return (
    <span className="text-gray-500">
      📍 {value.toFixed(1)} km
    </span>
  );
}