import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";

export default function MainPageList({ searchMovieFn }: MovieListProps) {
  const popularArray = useSelector<MainPageMovieArray, SearchList>(
    (state) => state.popularArray
  );
  const topRatedArray = useSelector<MainPageMovieArray, SearchList>(
    (state) => state.topRatedArray
  );
  const nowPlayingArray = useSelector<MainPageMovieArray, SearchList>(
    (state) => state.nowPlayingArray
  );

  console.log(popularArray);

  return (
    <section className="bodyContent">
      <article className="listWrapper">
        <h2>Popular</h2>
        <section className="movieList">
          {popularArray.results === [] ? (
            <span>로딩중...</span>
          ) : (
            popularArray.results.map((a: Movie, index: number) => {
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
        </section>
      </article>

      <article className="listWrapper">
        <h2>Top Rated</h2>
        <section className="movieList">
          {topRatedArray.results === [] ? (
            <span>로딩중...</span>
          ) : (
            topRatedArray.results.map((a: Movie, index: number) => {
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
        </section>
      </article>

      <article className="listWrapper">
        <h2>Now Playing</h2>
        <section className="movieList">
          {nowPlayingArray.results === [] ? (
            <span>로딩중...</span>
          ) : (
            nowPlayingArray.results.map((a: Movie, index: number) => {
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
        </section>
      </article>
    </section>
  );
}
