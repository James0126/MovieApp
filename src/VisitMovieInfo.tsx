import React, { useEffect, useState } from "react";
import ActorList from "./ActorList";
import * as Search from "./Search";

export default function VisitMovieInfo({ movieId }: MovieIdObject) {
  const imageData: string = "https://image.tmdb.org/t/p/w400/";
  const imageBackData: string = "https://image.tmdb.org/t/p/original";

  const [movieData, setMovieData] = useState<Movie>({
    id: 0,
    release_date: "null",
    popularity: 0,
    overview: "null",
    backdrop_path: "null",
    title: "null",
    poster_path: "null",
    original_language: "null",
  });
  const backgroundImage: string = imageBackData + movieData.backdrop_path;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Search.searchMovieItem(movieId.toString(), setLoading, setMovieData);
  }, [movieId]);
  return loading ? (
    <span>로딩중...</span>
  ) : !movieData ? (
    <span>정보가 없음</span>
  ) : (
    <section className="bodyContent">
      <div className="visitTop">
        <div
          className="backGroundImg"
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <article className="movieVisitInfo">
        <img
          src={imageData + movieData.poster_path}
          alt="포스터 이미지"
          className="visitTitleImg"
          style={
            movieData.poster_path === null
              ? { width: "250px", height: "300px" }
              : {}
          }
        />
        <article className="movieInfoText">
          <h1 className="visitMovieName">{movieData.title}</h1>
          <time className="movieReleaseDate">
            개봉날짜 : {movieData.release_date}
          </time>
          <article className="movieSummary">
            <h2>개요</h2>{" "}
            <p className="movieOverView">
              {movieData.overview === "" ? "정보없음" : movieData.overview}
            </p>
          </article>
        </article>
      </article>
      <hr />
      <div className="actorListSpace">
        <h1 className="actorListSpaceTitle">출연진</h1>
        <ActorList movieId={movieId} />
      </div>
    </section>
  );
}
