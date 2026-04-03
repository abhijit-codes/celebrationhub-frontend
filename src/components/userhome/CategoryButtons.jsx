import { FaCamera, FaMusic, FaUtensils, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CategoryButtons() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Cameraman",
      key: "cameraman",
      icon: <FaCamera className="text-purple-600 text-xl" />,
    },
    {
      name: "DJ",
      key: "dj",
      icon: <FaMusic className="text-pink-500 text-xl" />,
    },
    {
      name: "Caterer",
      key: "caterer",
      icon: <FaUtensils className="text-orange-500 text-xl" />,
    },
    {
      name: "Tent",
      key: "tent",
      icon: <FaHome className="text-blue-500 text-xl" />,
    },
  ];

  const handleClick = (category) => {
    navigate(`/category/${category}`); // 👈 NAVIGATION
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">

      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => handleClick(cat.key)}
          className="bg-white rounded-lg shadow p-3 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          {cat.icon}

          <p className="mt-1 text-xs font-medium text-gray-700 text-center">
            {cat.name}
          </p>
        </div>
      ))}

    </div>
  );
}