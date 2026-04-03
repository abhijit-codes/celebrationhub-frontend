export default function PriceDetails({ vendor, step, setStep, date, time }) {
  const total = vendor.price;

  return (
    <div className="bg-white p-4 rounded-xl shadow">

      <h2 className="font-semibold mb-4">Price Details</h2>

      {/* 🔥 DATE & TIME */}
      <div className="mb-4 text-sm">
        <p>
          <span className="font-medium">Date:</span>{" "}
          {date || "Not selected"}
        </p>
        <p>
          <span className="font-medium">Time:</span>{" "}
          {time || "Not selected"}
        </p>
      </div>

      <div className="text-sm space-y-2">
        <div className="flex justify-between">
          <span>Price</span>
          <span>₹{vendor.price}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ₹100</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={() =>
          setStep(step === "cart" ? "address" : "payment")
        }
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
      >
        {step === "payment" ? "Continue to Pay" : "Proceed"}
      </button>

    </div>
  );
}