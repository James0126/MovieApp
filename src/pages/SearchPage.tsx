import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieListItem from "../listComponent/MovieListItem";
import * as action from "../apiAction/action";

const SearchPage = () => {
  const movieArray = useSelector<StoreState, StoreState>((state) => state);
  const { search } = useLocation();
  useEffect(() => {
    //사용자에 의해 바뀌기 때문에(검색)
    const url: string[] = new URLSearchParams(search).toString().split("=");
    action.getSearchMovieList(url[url.length - 1]);
  }, [search]);

  return !movieArray.topRated.results.length ? (
    <span>로딩중...</span>
  ) : (
    <section className="searchMovieList">
      {movieArray.search.results.map((movie: Movie, index: number) => (
        <MovieListItem movie={movie} horizontal={false} key={index} />
      ))}
    </section>
  );
};
export default SearchPage;
