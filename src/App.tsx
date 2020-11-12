import React, { useEffect, useState } from "react";
import "./style.css";
import MainPageList from "./MainPageList";
import VisitMovieInfo from "./VisitMovieInfo";
import SearchPage from "./SearchPage";
import SearchInput from "./SearchInput";

function App() {
  const [pageName, setPageName] = useState<string>("");
  const [movieId, setMovieId] = useState<number>();

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  const listenToPopstate = () => setPageName(window.location.pathname);

  useEffect(() => {
    const pageUrl: string[] = window.location.href.split("/");
    const searchUrl: string[] = window.location.href.split("=");

    pageUrl[pageUrl.length - 1] === ""
      ? setPageName("MainPage")
      : pageUrl[pageUrl.length - 2] === "SearchPage"
      ? setSearchData(searchUrl[searchUrl.length-1], "SearchPage")
      : setPageName(pageUrl[pageUrl.length - 1]);
    if (
      pageUrl[pageUrl.length - 1] !== "MainPage" &&
      pageUrl[pageUrl.length - 2] !== "SearchPage"
    )
      setMovieId(parseInt(pageUrl[pageUrl.length - 1]));
  }, [pageName]);

  const setMovie = (movieId: number) => {
    window.history.pushState(null, "title", "../Info/" + movieId.toString());
    const pageUrl: string[] = window.location.href.split("/");
    setPageName(pageUrl[pageUrl.length - 1]);
    setMovieId(movieId);
  };

  const setSearchData = (searchQuery: string, page: string) =>{
    setPageName(page);
    setSearchQuery(searchQuery);
  }

  const searchMovieArray = (searchQuery: string, page: string) => {
    setSearchData(searchQuery, page);
    window.history.pushState(
      null,
      "title",
      "../SearchPage/search?query=" + searchQuery
    );
  };

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
        <h1 className="headertitle card-title">Title</h1>
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
