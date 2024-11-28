import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FiArrowLeft, FiLoader, FiUsers } from "react-icons/fi";
import { fetchSuperheroById } from "../utils/superheroData";
import type { Superhero } from "../store/superheroesSlice";

export default function SuperheroDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [hero, setHero] = useState<Superhero | null>(
    location.state?.hero || null
  );
  const [loading, setLoading] = useState(!location.state?.hero);
  const [error, setError] = useState("");

  useEffect(() => {
    const getHeroDetails = async () => {
      if (!location.state?.hero && id) {
        try {
          setLoading(true);
          const data = await fetchSuperheroById(id);
          if (data.response === "error") {
            throw new Error(data.error || "Hero not found");
          }
          setHero(data);
        } catch (err) {
          console.error("Error fetching hero:", err);
          setError("Failed to fetch hero details. Please try again later.\nPlease check README for further details.");
        } finally {
          setLoading(false);
        }
      }
    };

    getHeroDetails();
  }, [id, location.state?.hero]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FiLoader className="h-12 w-12 text-white animate-spin" />
      </div>
    );
  }

  if (error || !hero) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-500 text-xl">{error || "Hero not found"}</p>
          <Link
            to="/superheroes"
            className="inline-flex items-center text-white mt-4 hover:text-gray-300"
          >
            <FiArrowLeft className="h-5 w-5 mr-2" />
            Back to Heroes
          </Link>
        </div>
      </div>
    );
  }

  const renderStatBar = (value: string) => {
    const percentage = parseInt(value) || 0;
    return (
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        to="/superheroes"
        className="inline-flex items-center text-white mb-6 hover:text-gray-300"
      >
        <FiArrowLeft className="h-5 w-5 mr-2" />
        Back to Heroes
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={hero.image?.url}
            alt={hero.name}
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 rounded-lg bg-gradient-to-t from-black to-transparent p-6">
            <h1 className="text-3xl font-bold text-white">{hero.name}</h1>
            <p className="text-gray-300">
              {hero.biography?.publisher || "Unknown Publisher"}
            </p>
            {hero.biography?.["full-name"] && (
              <p className="text-gray-400 text-sm mt-1">
                {hero.biography["full-name"]}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Power Stats</h2>
            <div className="space-y-4">
              {Object.entries(hero.powerstats || {}).map(([stat, value]) => (
                <div key={stat}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 capitalize">{stat}</span>
                    <span className="text-white">{value || "0"}</span>
                  </div>
                  {renderStatBar(value || "0")}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Gender</p>
                <p className="text-white">
                  {hero.appearance?.gender || "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Race</p>
                <p className="text-white">
                  {hero.appearance?.race || "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Height</p>
                <p className="text-white">
                  {hero.appearance?.height?.[1] || "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Weight</p>
                <p className="text-white">
                  {hero.appearance?.weight?.[1] || "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Alignment</p>
                <p className="text-white capitalize">
                  {hero.biography?.alignment || "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-gray-400">First Appearance</p>
                <p className="text-white">
                  {hero.biography?.["first-appearance"] || "Unknown"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <FiUsers className="h-5 w-5 mr-2" />
              Connections
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Group Affiliations</p>
                <p className="text-white">
                  {hero.connections?.["group-affiliation"] || "None"}
                </p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Relatives</p>
                <p className="text-white">
                  {hero.connections?.relatives || "None known"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
