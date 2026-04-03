export default function Stepper({ step }) {
  const steps = ["cart", "address", "payment"];

  return (
    <div className="flex items-center justify-center gap-6 mb-6">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">

          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm
              ${step === s ? "bg-blue-600" : "bg-gray-400"}`}
          >
            {i + 1}
          </div>

          <p className="capitalize text-sm text-gray-700">{s}</p>

          {i < steps.length - 1 && <div className="w-10 h-[2px] bg-gray-300"></div>}
        </div>
      ))}
    </div>
  );
}