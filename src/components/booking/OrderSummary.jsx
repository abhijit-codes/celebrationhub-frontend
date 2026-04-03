export default function OrderSummary({ vendor }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">

      <h2 className="font-semibold mb-4">Order Summary</h2>

      <div className="flex gap-4">

        <img
          src={vendor.image}
          className="w-28 h-28 object-cover rounded"
        />

        <div>
          <h3 className="font-semibold">{vendor.name}</h3>

          <p className="text-sm text-gray-500">Quantity: 1</p>

          <p className="text-gray-400 line-through">
            ₹{vendor.price + 100}
          </p>

          <p className="text-green-600 font-bold">
            ₹{vendor.price}
          </p>

          <p className="text-sm text-green-500">
            Shipping: FREE
          </p>
        </div>

      </div>
    </div>
  );
}