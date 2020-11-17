import React, { useState } from "react";
import "./style.css";
import MainPageList from "./MainPageList";
import VisitMovieInfo from "./VisitMovieInfo";
import SearchPage from "./SearchPage";
import SearchInput from "./SearchInput";
import useHistoryManager from "./useHistoryManager";

function App() {
  const [pageName, setPageName] = useState<string>("");
  const [movieId, setMovieId] = useState<number>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const setMovie = (movieId: number) => {
    window.history.pushState(null, "title", "../Info/" + movieId.toString());
    const pageUrl: string[] = window.location.href.split("/");
    setPageName(pageUrl[pageUrl.length - 1]);
    setMovieId(movieId);
  };

  const searchMovieArray = (searchQuery: string, page: string) => {
    setPageName(page);
    setSearchQuery(searchQuery);
    window.history.pushState(
      null,
      "title",
      "../SearchPage/search?query=" + searchQuery
    );
  };

  useHistoryManager(setPageName, setSearchQuery, setMovieId, pageName);

  const render = () =>
    pageName === "MainPage" ? (
      <MainPageList searchMovieFn={setMovie} />
    ) : pageName === "SearchPage" ? (
      <SearchPage
        query={searchQuery}
        searchMovieFn={setMovie}
        pageState={"SearchPage"}
      />
    ) : (
      movieId && <VisitMovieInfo movieId={movieId} />
    );

  return (
    <div className="App">
      <header className="header card-header">
        <a href="/" className="headerTitle">
          Movie
        </a>
      </header>
      <section>
        <SearchInput searchMovieFn={searchMovieArray} pageState={pageName} />
        {render()}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
