import React, { useState } from "react";
import "./style.css";
import MainPageList from "./MainPageList";
import VisitMovieInfo from "./VisitMovieInfo";
import SearchPage from "./SearchPage";
import SearchInput from "./SearchInput";

function App() {
  const [pageName, setPageName] = useState<string>("MainPage");
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
  const [searchQuery, setSearchQuery] = useState<string>("");

  const setMovie = (movie: Movie, page: string) => {
    setPageName(page);
    setMovieData(movie);
  };

  const searchMovieArray = (searchQuery:string, page:string)=>{
    setPageName(page);
    setSearchQuery(searchQuery);
  }

  const render = () => {
    if (pageName === "MainPage")
      return <MainPageList clickFn={setMovie}/>;
    else if (pageName === "VisitPage")
      return <VisitMovieInfo movie={movieData}/>;
    else if(pageName==="SearchPage") 
      return <SearchPage url={searchQuery} clickFn={setMovie}/>
  };

  return (
    <div className="App">
      <header className="header card-header">
        <h1 className="headertitle card-title">Title</h1>
      </header>
      <section>
        <SearchInput clickFn={searchMovieArray} pageState={pageName}/>
        {render()}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
