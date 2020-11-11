import React, { useState, useEffect } from "react";
import MovieListItem from "./MovieListItem";
import * as Search from "./Search";

export default function MovieList({
  url,
  searchMovieFn,
  pageState,
}: MovieListData) {
  const [loading, setLoading] = useState<boolean>(true);

  const [movieArray, setMovieArray] = useState<Movie[]>([]);

  useEffect(() => {
    Search.searchMovieArray(url, setLoading, setMovieArray);
  }, []);

  return loading ? (
    <span>로딩중...</span>
  ) : !movieArray ? (
    <span>정보가 없음</span>
  ) : (
    <section className="movieList">
      {movieArray.map((a: Movie, index: number) => {
        return (
          <MovieListItem
            movieData={a}
            index={index}
            searchMovieFn={searchMovieFn}
            key={index}
            pageState={pageState}
          />
        );
      })}
    </section>
  );
}
