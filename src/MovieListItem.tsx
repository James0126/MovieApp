import React from "react";

export default function MovieListItem({
  movieData,
  index,
  searchMovieFn,
  pageState,
}: MovieListItemData) {
  const imageData: string = "https://image.tmdb.org/t/p/w154/";
  return (
    <article
      className={
        pageState === "MainPage" ? "movieListItemMain" : "movieListItemSub"
      }
      key={index}
      onClick={() => searchMovieFn(movieData.id)}
    >
      <div className="movieVisitLink">
        <img
          className="movieImg"
          src={imageData + movieData.poster_path}
          alt="영화 포스터 이미지"
          style={
            movieData.poster_path === null
              ? { width: "250px", height: "300px" }
              : {}
          }
        />
      </div>
      <article
        className={pageState === "MainPage" ? "movieTextMain" : "movieTextSub"}
      >
        <nav>
          <div className="movieVisitLink">
            <h1 className="movieName">{movieData.title}</h1>
            <time className="movieReleaseDate">{movieData.release_date}</time>
          </div>
        </nav>
      </article>
    </article>
  );
}
