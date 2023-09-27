import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"; // Import your custom CSS file

const MovieList = ({ title, movies }) => {
  return (
    <div className="-ml-8 px-6 bg-black">
      <h1 className="text-3xl py-4 md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll custom-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
