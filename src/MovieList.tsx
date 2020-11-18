import React from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList({
  movieArray,
  searchMovieFn,
  pageState
}: MovieListData) {

  return(
    <section className="movieList">
      {movieArray === [] ? (
            <span>로딩중...</span>
          ) : (
            movieArray.map((a: Movie, index: number) => {
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
  );
}
