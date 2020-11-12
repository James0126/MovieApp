import React from "react";
import MovieList from "./MovieList";
import * as ApiUrl from "./ApiUrl";

export default function MainPageList({ searchMovieFn }: MovieListProps) {
  return (
    <section className="bodyContent">
      <article className="listWrapper">
        <h2>Popular</h2>
        <MovieList
          url={ApiUrl.popularUrl}
          searchMovieFn={searchMovieFn}
          pageState={"MainPage"}
        />
      </article>

      <article className="listWrapper">
        <h2>Top Rated</h2>
        <MovieList
          url={ApiUrl.topRatedUrl}
          searchMovieFn={searchMovieFn}
          pageState={"MainPage"}
        />
      </article>

      <article className="listWrapper">
        <h2>Now Playing</h2>
        <MovieList
          url={ApiUrl.nowPlayingUrl}
          searchMovieFn={searchMovieFn}
          pageState={"MainPage"}
        />
      </article>
    </section>
  );
}
