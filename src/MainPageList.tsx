import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function MainPageList({ searchMovieFn }: MovieListProps) {
  const movieArray = useSelector<StoreState, StoreState>((state) => state);

  return (
    <section className="bodyContent">
      <article className="listWrapper">
        <h2>Popular</h2>
        <MovieList
          movieArray={movieArray.popularArray.results}
          searchMovieFn={searchMovieFn}
          pageState="MainPage"
        />
      </article>

      <article className="listWrapper">
        <h2>Top Rated</h2>
        <MovieList
            movieArray={movieArray.topRatedArray.results}
            searchMovieFn={searchMovieFn}
            pageState="MainPage"
          />
      </article>
      <article className="listWrapper">
        <h2>Now Playing</h2>
        <MovieList
            movieArray={movieArray.nowPlayingArray.results}
            searchMovieFn={searchMovieFn}
            pageState="MainPage"
          />
      </article>
    </section>
  );
}
