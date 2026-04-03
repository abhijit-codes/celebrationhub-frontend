import CategoryButtons from "./CategoryButtons";

export default function Hero() {
  return (
    <div className="px-4 pt-6 pb-4 text-white">

      {/* TEXT SECTION */}
      <h1 className="text-3xl font-bold leading-snug">
        Compare. Choose. Celebrate. 🎉
      </h1>

      <p className="text-white/80 mt-2 mb-6">
        Find the best vendors for your special events
      </p>

      {/* CATEGORY BUTTONS */}
      <CategoryButtons />

    </div>
  );
}