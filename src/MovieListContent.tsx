import React, { ChangeEvent, useState, useEffect } from "react";
import MovieList from "./MovieList";
import * as Search from "./Search";
import * as ApiUrl from "./ApiUrl";

export default function SearchMovieList({ onClick }: MovieListProps) {
  const [inputData, setInputData] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  const findMovie = (num: number) => {
    onClick(movieData[num], "VisitPage");
  };

  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const [movieData, setMovieData] = useState<Movie[]>([]);
  const searchingMovie = () => {
    setPageNum(1);
    Search.searchMovie(
      ApiUrl.searchQuery+"&query=" + inputData,
      setLoading,
      setMovieData,
      pageNum
    );
  };
  useEffect(() => {
    Search.searchMovie(ApiUrl.popularUrl, setLoading, setMovieData);
  }, []);

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
      <div className="searchInputSpace">
        <input
          type="text"
          name="search"
          onChange={onChange}
          value={inputData}
          className="searchInputField form-control"
        />
        <button onClick={searchingMovie} className="input-group-text">
          검색
        </button>
      </div>
      <div className="btn-group">
        <button
          className="sortButton btn btn-secondary"
          onClick={() => {
            Search.searchMovie(ApiUrl.popularUrl, setLoading, setMovieData);
          }}
        >
          Popular
        </button>
        <button
          className="sortButton btn btn-secondary"
          onClick={() => {
            Search.searchMovie(ApiUrl.topRatedUrl, setLoading, setMovieData);
          }}
        >
          Top Rating
        </button>
        <button
          className="sortButton btn btn-secondary"
          onClick={() => {
            Search.searchMovie(ApiUrl.nowPlayingUrl, setLoading, setMovieData);
          }}
        >
          Now Playing
        </button>
      </div>
      <MovieList movieArray={movieData} loading={loading} onClick={findMovie} />
      <div className="listFooter">
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
      </div>
    </section>
  );
}
