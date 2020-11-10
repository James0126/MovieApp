import React, { useEffect } from "react";
import MovieList from "./MovieList";
import * as ApiUrl from "./ApiUrl";

export default function MainPageList({ clickFn }: MovieListProps) {

  // const pressButton = (name: string) => {
  //   if (name === "prev")
  //     pageNum > 1 ? setPageNum(pageNum - 1) : setPageNum(pageNum);
  //   else if (name === "next")
  //     pageNum < 10 ? setPageNum(pageNum + 1) : setPageNum(pageNum);
  //   else return;
  //   Search.searchMovie(pageAddres, setLoading, setMovieData, pageNum);
  // };


  return (
    <section className="bodyContent">
      <article className="listWrapper">
        <h2>Popular</h2>
        <MovieList
          url={ApiUrl.popularUrl}
          clickFn={clickFn}
          pageState={"MainPage"}
        />
      </article>

      <article className="listWrapper">
        <h2>Top Rated</h2>
        <MovieList
          url={ApiUrl.topRatedUrl}
          clickFn={clickFn}
          pageState={"MainPage"}
        />
      </article>

      <article className="listWrapper">
        <h2>Now Playing</h2>
        <MovieList
          url={ApiUrl.nowPlayingUrl}
          clickFn={clickFn}
          pageState={"MainPage"}
        />
      </article>

      {/* <div className="listFooter">
        <button
          // onClick={() => {
          //   pressButton("prev");
          // }}
          className="pageButton btn btn-secondary"
        >
          이전
        </button>
        <button
          // onClick={() => {
          //   pressButton("next");
          // }}
          className="pageButton btn btn-secondary"
        >
          다음
        </button>
      </div> */}
    </section>
  );
}
