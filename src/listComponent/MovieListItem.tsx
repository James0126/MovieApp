import React from "react";
import * as apiUrl from "../apiAction/apiUrl";
import { Link } from "react-router-dom";

const MovieListItem = ({ movie, horizontal }: MovieListItem) => {
  return (
    <article className={horizontal ? "movieListItemMain" : "movieListItemSub"}>
      <Link to={`/info/${movie.id}`}>
        <img
          className="movieImg"
          src={apiUrl.posterImage + movie.poster_path}
          alt="영화 포스터 이미지"
          style={!movie.poster_path ? { width: "250px", height: "300px" } : {}}
        />
      </Link>
      <article className={horizontal ? "movieTextMain" : "movieTextSub"}>
        <nav>
          <div className="movieVisitLink">
            <h1 className="movieName">{movie.title}</h1>
            <time className="movieReleaseDate">{movie.release_date}</time>
          </div>
        </nav>
      </article>
    </article>
  );
};
export default MovieListItem;
