import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiSearch, FiAlertCircle, FiRotateCcw, FiLoader } from "react-icons/fi";
import {
  searchSuperheroes,
  setFilters,
  resetFilters,
  setSearchTerm,
  resetSearch,
} from "../store/superheroesSlice";
import type { AppDispatch, RootState } from "../store/store";

export default function SuperheroList() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, filters, searchTerm, error, hasSearched } =
    useSelector((state: RootState) => state.superheroes);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchSuperheroes(searchTerm));
    }
  };

  const handleReset = () => {
    dispatch(resetSearch());
    dispatch(resetFilters());
  };

  const filteredHeroes = items.filter((hero) => {
    if (!hero) return false;

    return (
      (!filters.publisher || hero.biography?.publisher === filters.publisher) &&
      (!filters.alignment || hero.biography?.alignment === filters.alignment) &&
      (!filters.race || hero.appearance?.race === filters.race) &&
      (!filters.gender || hero.appearance?.gender === filters.gender)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Reset */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search heroes..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-blue-600 transition-colors"
          >
            Search
          </button>
          {hasSearched && (
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 text-white"
              title="Reset to initial heroes"
            >
              <FiRotateCcw className="h-6 w-6" />
            </button>
          )}
        </form>

        {error && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-4 flex items-center">
            <FiAlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filters.publisher}
            onChange={(e) =>
              dispatch(setFilters({ publisher: e.target.value }))
            }
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            <option value="">All Publishers</option>
            <option value="Marvel Comics">Marvel Comics</option>
            <option value="DC Comics">DC Comics</option>
          </select>

          <select
            value={filters.alignment}
            onChange={(e) =>
              dispatch(setFilters({ alignment: e.target.value }))
            }
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            <option value="">All Alignments</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="neutral">Neutral</option>
          </select>

          <select
            value={filters.race}
            onChange={(e) => dispatch(setFilters({ race: e.target.value }))}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            <option value="">All Races</option>
            <option value="Human">Human</option>
            <option value="Mutant">Mutant</option>
            <option value="Alien">Alien</option>
            <option value="God / Eternal">God / Eternal</option>
            <option value="Cyborg">Cyborg</option>
            <option value="Asgardian">Asgardian</option>
            <option value="Kryptonian">Kryptonian</option>
          </select>

          <select
            value={filters.gender}
            onChange={(e) => dispatch(setFilters({ gender: e.target.value }))}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHeroes.map((hero) => (
          <Link
            key={hero.id}
            to={`/superheroes/${hero.id}`}
            className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
          >
            <div className="relative h-64">
              <img
                src={hero.image.url}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-xl font-bold text-white">{hero.name}</h2>
                <p className="text-gray-300 text-sm">
                  {hero.biography.publisher}
                </p>
                {hero.connections?.["group-affiliation"] && (
                  <p className="text-gray-400 text-xs mt-1 truncate">
                    {hero.connections["group-affiliation"]}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {status === "loading" && (
        <div className="flex justify-center mt-8">
          <FiLoader className="h-8 w-8 text-white animate-spin" />
        </div>
      )}

      {status === "succeeded" && filteredHeroes.length === 0 && (
        <div className="text-center text-gray-400 mt-8">
          No heroes found matching your criteria
        </div>
      )}
    </div>
  );
}
