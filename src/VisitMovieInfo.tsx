import React, { useEffect, useState } from "react";
import ActorList from "./ActorList";
import * as Action from "./Action";
import { useSelector } from "react-redux";

export default function VisitMovieInfo({ movieId }: MovieIdObject) {
  const imageData: string = "https://image.tmdb.org/t/p/w400/";
  const imageBackData: string = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    Action.getMovieDetail(movieId);
  }, [movieId]);

  const storeState = useSelector<StoreState, StoreState>((state) => state);
  console.log(storeState);

  const backgroundImage: string =
    imageBackData + storeState.movieDetail.backdrop_path;
  return storeState === undefined ? (
    <span>로딩중...</span>
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
          src={imageData + storeState.movieDetail.poster_path}
          alt="포스터 이미지"
          className="visitTitleImg"
          style={
            storeState.movieDetail.poster_path === null
              ? { width: "250px", height: "300px" }
              : {}
          }
        />
        <article className="movieInfoText">
          <h1 className="visitMovieName">{storeState.movieDetail.title}</h1>
          <time className="movieReleaseDate">
            개봉날짜 : {storeState.movieDetail.release_date}
          </time>
          <article className="movieSummary">
            <h2>개요</h2>{" "}
            <p className="movieOverView">
              {storeState.movieDetail.overview === ""
                ? "정보없음"
                : storeState.movieDetail.overview}
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
