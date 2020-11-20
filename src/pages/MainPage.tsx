import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../listComponent/MovieList";

const MainPage = () => {
  const movieArray = useSelector<StoreState, StoreState>((state) => state);

  return (
    <section className="bodyContent">
      <article className="listWrapper">
        <h2>Popular</h2>
        <MovieList movies={movieArray.popular.results} horizontal />
      </article>
      <article className="listWrapper">
        <h2>Top Rated</h2>
        <MovieList movies={movieArray.topRated.results} horizontal={true} />
      </article>
      <article className="listWrapper">
        <h2>Now Playing</h2>
        <MovieList movies={movieArray.nowPlaying.results} horizontal={true} />
      </article>
    </section>
  );
};
export default MainPage;
