export default function PaymentModal({ close, onCOD, onOnline, loading }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[350px]">

        <h2 className="font-semibold mb-4 text-lg">
          Select Payment Method
        </h2>

        {/* COD */}
        <button
          onClick={onCOD}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded mb-3"
        >
          {loading ? "Processing..." : "Cash on Delivery"}
        </button>

        {/* ONLINE */}
        <button
          onClick={onOnline}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Pay with UPI / Card
        </button>

        <button
          onClick={close}
          className="mt-4 text-red-500 text-sm"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}