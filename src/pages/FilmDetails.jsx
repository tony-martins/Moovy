import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";

export default function FilmDetails() {
  const { id } = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    async function fetchFilm() {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

        const data = await response.json();

        setFilm(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFilm();
  }, [id]);

  return (
    <div className="pb-12">
      <article className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Image */}
          <img
            src={film.image?.original}
            alt={film.name}
            className="absolute inset-0 h-full w-full object-cover opacity-20 blur-sm"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-950/80" />

          {/* Content */}
          <div className="relative flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:p-10">
            {/* Poster */}
            <div className="mx-auto w-full max-w-xs shrink-0 lg:mx-0">
              <img
                src={film.image?.original}
                alt={film.name}
                className="w-full rounded-xl object-cover shadow-2xl"
              />
            </div>

            {/* Film Information */}
            <div className="flex flex-1 flex-col justify-center">
              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {film.name}
              </h1>

              {/* Genres */}
              <div className="mt-5 flex flex-wrap gap-2">
                {film.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap gap-4">
                {/* Rating */}
                <div className="flex items-center gap-2 rounded-lg bg-gray-800/80 px-4 py-3">
                  <CiStar className="text-2xl text-yellow-400" />

                  <div>
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="font-semibold text-white">
                      {film.rating?.average || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Weight */}
                <div className="rounded-lg bg-gray-800/80 px-4 py-3">
                  <p className="text-xs text-gray-400">Weight</p>
                  <p className="font-semibold text-white">
                    {film.weight || "N/A"}
                  </p>
                </div>

                {/* Runtime */}
                <div className="rounded-lg bg-gray-800/80 px-4 py-3">
                  <p className="text-xs text-gray-400">Runtime</p>
                  <p className="font-semibold text-white">
                    {film.runtime ? `${film.runtime} mins` : "N/A"}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-7">
                <h2 className="mb-3 text-xl font-semibold text-white">
                  Overview
                </h2>

                <div
                  className="leading-7 text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: film.summary || "<p>No summary available.</p>",
                  }}
                />
              </div>

              {/* Ended */}
              <div className="mt-6">
                <span className="text-sm text-gray-400">Ended: </span>

                <span className="text-sm font-medium text-white">
                  {film.ended || "Still running"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}