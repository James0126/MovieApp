import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies, horizontal }: MovieList) => (
  <section className="movieList">
    {!movies.length ? (
      <span>로딩중...</span>
    ) : (
      movies.map((movie: Movie, index: number) => (
        <MovieListItem movie={movie} key={index} horizontal={horizontal} />
      ))
    )}
  </section>
);
export default MovieList;
