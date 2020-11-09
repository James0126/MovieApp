import React from "react";

export default function MovieListItem({
  movieData,
  index,
  clickFn,
}: MovieListItemData) {
  const imageData: string = "https://image.tmdb.org/t/p/w154/";
  return (
    <article className="movieListItem" key={index}>
      <a href="#" className="movieVisitLink" onClick={() => clickFn(movieData, "VisitPage")}>
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
      </a>
      <article className="movieText">
        <nav>
          <a href="#" className="movieVisitLink" onClick={() => clickFn(movieData, "VisitPage")}>
            <h1 className="movieName">{movieData.title}</h1>
            <time className="movieReleaseDate">{movieData.release_date}</time>
          </a>
        </nav>
      </article>
    </article>
  );
}
