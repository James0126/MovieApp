import React,{useState, useEffect} from "react";
import MovieListItem from "./MovieListItem";
import*as Search from "./Search"

export default function MovieList({
  url,
  clickFn,
}: MovieListData) {

const [loading, setLoading] = useState<boolean>(true);

const [movieArray, setMovieArray] = useState<Movie[]>([]);

useEffect(()=>{
  Search.searchMovie(url, setLoading, setMovieArray)
},[])
  

  if (loading) return <span>로딩중...</span>;
  else if (!movieArray) return <span>정보가 없음</span>;
  else {
    return (
      <section className="movieList">
        {movieArray.map((a: Movie, index: number) => {
          return (
            <MovieListItem
              movieData={a}
              index={index}
              clickFn={clickFn}
              key={index}
            />
          );
        })}
      </section>
    );
  }
}
