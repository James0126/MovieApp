import React, { ChangeEvent, useState, useEffect, MouseEvent } from "react";
import MovieList from "./MovieList";
import * as Search from "./Search";

export default function SearchMovieList({ onClick, apiKeys }: MovieList_Props) {
  const [inputData, setInputData] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  const findMovie = (num: number) => {
    onClick(movieData[num], "VisitPage");
  };

  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const apiAddres:string = "https://api.themoviedb.org/3/";

  const searchMovieAddres: string =
    "search/movie?api_key=" +
    apiKeys +
    "&language=ko&query=";

  const popular: string =
    "movie/popular?api_key=" +
    apiKeys +
    "&language=ko";

  const nowPlaying: string =
    "movie/now_playing?api_key=" +
    apiKeys +
    "&language=ko";

  const topRated: string =
    "movie/top_rated?api_key=" +
    apiKeys +
    "&language=ko";

  const [pageAddres, setPageAddres] = useState<string>(apiAddres+popular);
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const searchingMovie = () => {
    setPageNum(0);
    Search.searchMovie(
      apiAddres+searchMovieAddres + inputData,
      setLoading,
      setMovieData,
      pageNum
    );
  };
  useEffect(() => {
    Search.searchMovie(pageAddres, setLoading, setMovieData);
  }, [pageAddres]);

  // const pressButton = (name: string) => {
  //   if (name === "prev" && pageNum > 1) setPageNum(pageNum - 1);
  //   else if (name === "next" && pageNum < 10) setPageNum(pageNum + 1);
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
            setPageAddres(popular);
          }}
        >
          Popular
        </button>
        <button
          className="sortButton btn btn-secondary"
          onClick={() => {
            setPageAddres(topRated);
          }}
        >
          Top Rating
        </button>
        <button
          className="sortButton btn btn-secondary"
          onClick={() => {
            setPageAddres(nowPlaying);
          }}
        >
          Now Playing
        </button>
      </div>
      <MovieList movieArray={movieData} loading={loading} onClick={findMovie} />
      <div className="listFooter">
        <button
          onClick={() => pressButton("prev")}
          className="pageButton btn btn-secondary"
        >
          이전
        </button>
        <button
          onClick={() => pressButton("next")}
          className="pageButton btn btn-secondary"
        >
          다음
        </button>
      </div>
    </section>
  );
}
