import React,{useState, useEffect} from "react";
import MovieListItem from "./MovieListItem";
import * as Search from "./Search";


export default function SearchPage({ url, clickFn, pageState }: MovieListData) {

  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(()=>{
      Search.searchMovie(url, setLoading, setMovieData);
  },[url])

  if (loading) return <span>로딩중...</span>;
  else if (movieData===[]) return <span>정보가 없음</span>;
  else
  {
    return (
        <section className="searchMovieList">
          {movieData.map((a: Movie, index: number) => {
            return (
              <MovieListItem
                movieData={a}
                index={index}
                clickFn={clickFn}
                pageState={pageState}
                key={index}
              />
            );
          })}
        </section>
      );
  }  
}
