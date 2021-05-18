import thunk from "redux-thunk";
import * as apiUrl from "./apiUrl";
import { createStore, applyMiddleware } from "redux";

const getMainList = "getMainList";
const getSearchList = "getSearchList";
const getMovieInfo = "getMovieInfo";
const getMovieActor = "getMovieActor";

const initSearchList = {
  page: 0,
  total_results: 0,
  total_pages: 0,
  results: [],
};
const initDetail: Movie = {
  id: 0,
  title: "",
  release_date: "",
  popularity: 0,
  backdrop_path: "",
  poster_path: "",
  original_language: "",
  overview: "",
};
const initActorList: ActorListObject = {
  cast: [],
  crew: [],
  id: 0,
};

export const initMovies: StoreState = {
  popular: initSearchList,
  topRated: initSearchList,
  nowPlaying: initSearchList,
  search: initSearchList,
  movieDetail: initDetail,
  movieActors: initActorList,
};

export const getMainPageList = async () => {
  try {
    const list: StoreState = initMovies;
    const popular = await fetch(apiUrl.popular);
    const topRated = await fetch(apiUrl.topRated);
    const nowPlaying = await fetch(apiUrl.nowPlaying);

    if (popular.ok && topRated.ok && nowPlaying.ok) {
      list.popular = await popular.json();
      list.topRated = await topRated.json();
      list.nowPlaying = await nowPlaying.json();

      store.dispatch({ type: getMainList, movies: list });
    } else {
      throw new Error(
        `popular : ${popular.json()}, 
        topRated : ${topRated.json()}, 
        nowPlaying : ${nowPlaying.json()}`
      );
    }
  } catch (e) {
    window.alert(e);
  }
};

export const getSearchMovieList = async (inputs: string) => {
  try {
    const list: StoreState = initMovies;
    const response = await fetch(apiUrl.searchQuery + inputs);
    if (response.ok) {
      list.search = await response.json();
      store.dispatch({ type: getSearchList, movies: list });
    } else {
      throw new Error(`Search: ${response.json()}`);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMovieDetail = async (id: number) => {
  try {
    const list: StoreState = initMovies;
    const response = await fetch(
      `${apiUrl.main}movie/${id + apiUrl.key + apiUrl.lang}`
    );
    if (response.ok) {
      list.movieDetail = await response.json();
      store.dispatch({ type: getMovieInfo, movies: list });
    } else {
      throw new Error(`Detail: ${response.json()}`);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMovieActors = async (id: number) => {
  try {
    const list: StoreState = initMovies;
    const response = await fetch(
      `${apiUrl.main}movie/${id}/credits${apiUrl.key}`
    );
    if (response.ok) {
      list.movieActors = await response.json();
      store.dispatch({ type: getMovieActor, movies: list });
    } else {
      throw new Error(`Detail: ${response.json()}`);
    }
  } catch (e) {
    console.log(e);
  }
};

const reducer = (state = initMovies, action: MovieArrayAction) => {
  switch (action.type) {
    case getMainList:
      return {
        ...state,
        popular: action.movies.popular,
        topRated: action.movies.topRated,
        nowPlaying: action.movies.nowPlaying,
      };
    case getSearchList:
      return {
        ...state,
        search: action.movies.search,
      };
    case getMovieInfo:
      return {
        ...state,
        movieDetail: action.movies.movieDetail,
      };
    case getMovieActor:
      return {
        ...state,
        movieActors: action.movies.movieActors,
      };
    default:
      return state;
  }
};
export const store = createStore(reducer, applyMiddleware(thunk));
