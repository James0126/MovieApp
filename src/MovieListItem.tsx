import React from "react";

export default function Movie_List_Item({ movieData, index, onClick }: MovieListItemData) {
  const imageData: string = "https://image.tmdb.org/t/p/w200/";
  return (
    <article className="movieListItem list-group-item" key={index}>
      <img
        className="movieImg"
        src={imageData + movieData.poster_path}
        alt="이미지 정보없음"
        style={
          movieData.poster_path === null
            ? { width: "250px", height: "300px" }
            : {}
        }
      />
      <article className="movieText">
        <nav>
          <a
            href="#"
            className="movieVisitLink"
            onClick={() => onClick(index)}
          >
            <h1 className="movieName">{movieData.title}</h1>
            <time className="movieReleaseDate">
              개봉날짜 : {movieData.release_date}
            </time>
            <p className="movieSummary">{movieData.overview}</p>
          </a>
        </nav>
      </article>
    </article>
  );
}
