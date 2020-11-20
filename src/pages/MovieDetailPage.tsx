import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as action from "../apiAction/action";
import * as apiUrl from "../apiAction/apiUrl";
import ActorList from "../listComponent/ActorList";

const MovieDetailPage = () => {
  const history = useHistory();
  useEffect(() => {
    //사용자에 의해 바뀌기 때문에 받아온 id가 다를때 마다 호출
    const url: string[] = history.location.pathname.toString().split("/");
    action.getMovieDetail(parseInt(url[url.length - 1]));
  }, []);

  const storeState = useSelector<StoreState, StoreState>((state) => state);
  const backgroundImage: string =
    apiUrl.backgroundImage + storeState.movieDetail.backdrop_path;

  return !storeState.movieDetail ? (
    <span>로딩중...</span>
  ) : (
    <section className="bodyContent">
      <div className="visitTop">
        <div
          className="backGroundImg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      </div>
      <article className="movieVisitInfo">
        <img
          src={apiUrl.detailImage + storeState.movieDetail.poster_path}
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
            <h2>개요</h2>
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
        <ActorList />
      </div>
    </section>
  );
};
export default MovieDetailPage;
