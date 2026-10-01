import { useEffect } from "react";
import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllFilms() {
  const [allFilms, setAllFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        const data = await response.json();

        console.log(data);

        setAllFilms(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFilms();
  }, []);

  return (
    <div className="pb-10">
      <header className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">All Films</h1>

          <p className="mt-2 text-sm text-gray-400">
            Explore our collection of movies and TV shows
          </p>
        </div>

        {/* Filters */}
        <ul className="flex flex-wrap gap-3">
          <li>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              All Languages
            </button>
          </li>

          <li>
            <button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white">
              All Ratings
            </button>
          </li>

          <li>
            <button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white">
              All Genres
            </button>
          </li>
        </ul>
      </header>

      {/* Movies Grid */}
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {allFilms.map((film) => (
          <li key={film.id}>
            <Link
              to={`films/${film.id}`}
              className="group block overflow-hidden rounded-xl bg-gray-900 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Poster */}
              <div className="relative overflow-hidden">
                <img
                  src={film.image?.medium}
                  alt={film.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                {/* Rating Badge */}
                {/* adding 3 stars for rating with diffrent method*/}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs backdrop-blur-sm">
                  <span className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }, (_, index) => {
                      const rating = film.rating.average / 2;

                      if (index + 1 <= Math.floor(rating)) {
                        return <FaStar key={index} />;
                      }

                      if (index < rating) {
                        return <FaStarHalfAlt key={index} />;
                      }

                      return <FaRegStar key={index} />;
                    })}
                  </span>

                  <span className="ml-1 text-gray-300">
                    {film.rating.average}
                  </span>
                </div>
              </div>

              {/* Movie Information */}
              <div className="p-4">
                <h3 className="truncate text-base font-semibold text-white transition group-hover:text-blue-400">
                  {film.name}
                </h3>

                <p className="mt-2 truncate text-sm text-gray-400">
                  {film.genres.slice(0, 2).join(", ") || "No genre"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
