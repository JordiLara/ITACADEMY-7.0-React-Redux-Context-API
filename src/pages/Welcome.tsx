import { useNavigate } from "react-router-dom";
import { LuSwords } from "react-icons/lu";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-red-600 via-purple-600 to-blue-600">
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center max-w-2xl mx-4">
        <LuSwords className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          DC & Marvel Heroes
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Explore the vast universe of DC and Marvel superheroes. From the
          mighty Superman to the incredible Iron Man, discover detailed
          information about your favorite heroes.
        </p>
        <button
          onClick={() => navigate("/superheroes")}
          className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-md font-bold text-lg hover:from-red-600 hover:to-blue-600 transition-all transform hover:scale-105"
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
}
