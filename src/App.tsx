import React, { useState } from "react";
import "./style.css";
import MovieListContent from "./MovieListContent";
import VisitMovieInfo from "./VisitMovieInfo";

function App() {
  const [pageName, setPageName] = useState<string>("SearchPage");
  const [movieData, setMovieData] = useState<Movie>({
    id: 0,
    release_date: "null",
    popularity: 0,
    overview: "null",
    backdrop_path: "null",
    title: "null",
    poster_path: "null",
    original_language: "null",
  });

  const setMovie = (movie: Movie, page: string) => {
    setPageName(page);
    setMovieData(movie);
  };

  const render = () => {
    if (pageName === "SearchPage")
      return <MovieListContent onClick={setMovie}/>;
    else if (pageName === "VisitPage")
      return <VisitMovieInfo movie={movieData}/>;
    //ßelse if(pageName==="VisitHistoryPage") return();
  };

  return (
    <div className="App">
      <header className="header card-header">
        <h1 className="headertitle card-title">Title</h1>
      </header>
      <section>{render()}</section>
      <footer></footer>
    </div>
  );
}

export default App;
