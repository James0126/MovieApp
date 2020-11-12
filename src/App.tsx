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

  const render = () =>
    pageName === "MainPage" ? (
      <MainPageList searchMovieFn={setMovie} />
    ) : pageName === "SearchPage" ? (
      <SearchPage
        url={searchQuery}
        searchMovieFn={setMovie}
        pageState={"SearchPage"}
      />
    ) : (
      movieId && <VisitMovieInfo movieId={movieId} />
    );

  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  const listenToPopstate = () => {
      const winPath:string = window.location.pathname;
      setPageName(winPath);
  };
 
  useEffect(() => {
    const page: string[] = window.location.href.split("/");
    page[3] === "" ? setPageName("MainPage") : setPageName(page[3]);
    if (page[3] !== "MainPage" && page[3] !== "SearchPage")
      setMovieId(parseInt(page[3]));

  }, [pageName]);

  const setMovie = (movieId: number) => {
    window.history.pushState(null, "title", movieId.toString());
    const pageUrl: string[] = window.location.href.split("/");
    setPageName(pageUrl[3]);
    setMovieId(movieId);
  };

  const searchMovieArray = (searchQuery: string, page: string) => {
    setPageName(page);
    setSearchQuery(searchQuery);
  };

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
