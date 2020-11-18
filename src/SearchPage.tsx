import React, { useEffect } from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import * as Action from './Action'

export default function SearchPage({
  query,
  searchMovieFn,
  pageState,
}: MovieSearchQuery) {
  const movieArray = useSelector<StoreState, StoreState>(
    state => state
  );

  useEffect(() => {
    Action.getSearchMovieList(query);
  }, [query]);

  return movieArray.topRatedArray.results === [] ? (
    <span>로딩중...</span>
  ) : (
    <section className="searchMovieList">
      {movieArray.searchArray.results.map((a: Movie, index: number) => {
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
