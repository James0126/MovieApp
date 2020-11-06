import React from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList({ movieArray, loading, onClick}: MovieListData) {

  if (loading) return <div>로딩중...</div>;
  else if (!movieArray) return <div>정보가 없음</div>;
  else {
    return (
      <section className="movieList card">
        {movieArray.map((a: Movie, index: number) => {
           return(<MovieListItem movieData={a} index={index} onClick={onClick} key={index}/>);
        })}
      </section>
    );
  }
}
