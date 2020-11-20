import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as action from "../apiAction/action";
import MovieListItem from "../listComponent/MovieListItem";

const SearchPage = () => {
  const movieArray = useSelector<StoreState, StoreState>((state) => state);
  const history = useHistory();
  useEffect(() => {
    //사용자에 의해 바뀌기 때문에(검색)
    const url: string[] = new URLSearchParams(history.location.search)
      .toString()
      .split("=");
    action.getSearchMovieList(url[url.length - 1]);
  }, [history.location.search]);

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
