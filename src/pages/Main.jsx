import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const Main = () => {
  const { movies, loading, getMovies } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else {
      alert("Please enter a text");
    }
  };
  return (
    <>
      <div className=" dark:bg-gray-900">
        <form
          className="flex justify-center p-2 dark:bg-gray-900"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            className="w-80 h-10 rounded-md p-1 m-4 mt-10"
            placeholder="Search a movie..."
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button className="btn-danger-bordered " type="submit">
            Search
          </button>
        </form>
        <div className="flex justify-center flex-wrap">
          {loading ? (
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
