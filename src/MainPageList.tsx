import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";

export default function MainPageList({ searchMovieFn }: MovieListProps) {
  const movieArray = useSelector<StoreState, StoreState>(
    (state) => state
  );

  return (
    <section className="bodyContent">
      <article className="listWrapper">
        <h2>Popular</h2>
        <article className="movieList">
          {movieArray.popularArray.results === [] ? (
            <span>로딩중...</span>
          ) : (
            movieArray.popularArray.results.map((a: Movie, index: number) => {
              return (
                <MovieListItem
                  movieData={a}
                  index={index}
                  searchMovieFn={searchMovieFn}
                  key={index}
                  pageState={"MainPage"}
                />
              );
            })
          )}
        </article>
      </article>

      <article className="listWrapper">
        <h2>Top Rated</h2>
        <article className="movieList">
          {movieArray.topRatedArray.results === [] ? (
            <span>로딩중...</span>
          ) : (
            movieArray.topRatedArray.results.map((a: Movie, index: number) => {
              return (
                <MovieListItem
                  movieData={a}
                  index={index}
                  searchMovieFn={searchMovieFn}
                  key={index}
                  pageState={"MainPage"}
                />
              );
            })
          )}
        </article>
      </article>

      <article className="listWrapper">
        <h2>Now Playing</h2>
        <article className="movieList">
          {movieArray.nowPlayingArray.results === [] ? (
            <span>로딩중...</span>
          ) : (
            movieArray.nowPlayingArray.results.map((a: Movie, index: number) => {
              return (
                <MovieListItem
                  movieData={a}
                  index={index}
                  searchMovieFn={searchMovieFn}
                  key={index}
                  pageState={"MainPage"}
                />
              );
            })
          )}
        </article>
      </article>
    </section>
  );
}
