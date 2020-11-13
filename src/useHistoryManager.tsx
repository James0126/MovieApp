import { useEffect, SetStateAction } from "react";

export default function useHistoryManager(
  setPageName: (value: SetStateAction<string>) => void,
  setSearchQuery: (value: SetStateAction<string>) => void,
  setMovieId: (value: SetStateAction<number | undefined>) => void,
  pageName: string
) {
  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  const listenToPopstate = () => setPageName(window.location.pathname);
  const setSearchData = (searchQuery: string, page: string) => {
    setPageName(page);
    setSearchQuery(searchQuery);
  };
  useEffect(() => {
    const pageUrl: string[] = window.location.href.split("/");
    const searchUrl: string[] = window.location.href.split("=");

    pageUrl[pageUrl.length - 1] === ""
      ? setPageName("MainPage")
      : pageUrl[pageUrl.length - 2] === "SearchPage"
      ? setSearchData(searchUrl[searchUrl.length - 1], "SearchPage")
      : setPageName(pageUrl[pageUrl.length - 1]);
    if (
      pageUrl[pageUrl.length - 1] !== "MainPage" &&
      pageUrl[pageUrl.length - 2] !== "SearchPage"
    )
      setMovieId(parseInt(pageUrl[pageUrl.length - 1]));
  }, [pageName]);
}
