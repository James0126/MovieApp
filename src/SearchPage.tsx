import React, { useState, useEffect } from "react";
import MovieListItem from "./MovieListItem";
import * as Search from "./Search";
import * as ApiUrl from "./ApiUrl";

export default function SearchPage({
  query,
  searchMovieFn,
  pageState,
}: MovieSearchQuery) {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Search.searchMovieArray(
      ApiUrl.searchQuery + query,
      setLoading,
      setMovieData
    );
  }, [query]);

  return loading ? (
    <span>로딩중...</span>
  ) : !movieData ? (
    <span>정보가 없음</span>
  ) : (
    <section className="searchMovieList">
      {movieData.map((a: Movie, index: number) => {
        return (
          <MovieListItem
            movieData={a}
            index={index}
            searchMovieFn={searchMovieFn}
            pageState={pageState}
            key={index}
          />
        );
      })}
    </section>
  );
}
