import React, { useEffect, useState } from "react";
import Actor_List from "./ActorList";
import * as Search from "./Search";
import * as ApiUrl from "./ApiUrl"

export default function VisitMovieInfo({ movie}: MovieObject) {
  const imageData: string = "https://image.tmdb.org/t/p/w400/";
  const imageBackData: string = "https://image.tmdb.org/t/p/original/";
  const backgroundImage: string = imageBackData + movie.backdrop_path;

  const [actors, setActors] = useState<ActorInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=>{
    window.history.replaceState(null, "title", "/visit");
    Search.searchActors(ApiUrl.key, setLoading, setActors, movie.id);
  }, [])

  return (
    <section className="bodyContent">
      <div className="visitTop">
        <div
          className="backGroundImg"
          style={{ backgroundImage: "url(" + backgroundImage + ")", 
                  backgroundRepeat:'no-repeat',
                  backgroundSize:"cover",
                  }}
        >
        </div>
      </div>
        <article className="movieVisitInfo">
          <img
            src={imageData + movie.poster_path}
            alt="포스터 이미지"
            className="visitTitleImg"
            style={
              movie.poster_path === null
                ? { width: "250px", height: "300px" }
                : {}
            }
          />
          <article className="movieText">
            <h1 className="visitMovieName">{movie.title}</h1>
            <time className="movieReleaseDate">
              개봉날짜 : {movie.release_date}
            </time>
            <p className="movieSummary">
              <h2>개요</h2> {movie.overview === "" ? "정보없음" : movie.overview}
            </p>
          </article>
        </article>
      <hr />
      <div className="actorListSpace">
        <h1 className="actorListSpaceTitle">출연진</h1>
        <Actor_List actorList={actors} loading={loading}/>
      </div>
    </section>
  );
}
