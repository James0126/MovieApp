import * as ApiUrl from "./ApiUrl";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const getMainList = "getMainList";

const initSearchList = {
    page:0,
    total_results:0,
    total_pages:0,
    results:[]
}

export const initMovies: MainPageMovieArray = {
  popularArray: initSearchList,
  topRatedArray: initSearchList,
  nowPlayingArray: initSearchList,
};

export async function getMainPageList() {
  try {
    const List: MainPageMovieArray = {
      popularArray: initSearchList,
      topRatedArray: initSearchList,
      nowPlayingArray: initSearchList,
    };
    List.popularArray = await fetch(ApiUrl.popularUrl).then((res) =>
      res.json()
    );
    List.topRatedArray = await fetch(ApiUrl.topRatedUrl).then((res) =>
      res.json()
    );
    List.nowPlayingArray = await fetch(ApiUrl.nowPlayingUrl).then((res) =>
      res.json()
    );

    store.dispatch({ type: getMainList, movies: List });
  } catch (e) {
    /* TODO */
  }
}

export const reducer = (state = initMovies, action: MovieArrayAction) => {
  switch (action.type) {
    case getMainList:
      return {
        ...state,
        popularArray: action.movies.popularArray,
        topRatedArray: action.movies.topRatedArray,
        nowPlayingArray: action.movies.nowPlayingArray,
      };

    default:
      return state;
  } //수정필요
};

export const store = createStore(reducer, applyMiddleware(thunk));
