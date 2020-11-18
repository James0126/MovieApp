import * as ApiUrl from "./ApiUrl";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

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
const initActorList:ActorListObject ={
  cast:[],
  crew:[],
  id:0
}

export const initMovies: StoreState = {
  popularArray: initSearchList,
  topRatedArray: initSearchList,
  nowPlayingArray: initSearchList,
  searchArray: initSearchList,
  movieDetail: initDetail,
  movieActors: initActorList,
};

export async function getMainPageList() {
  try {
    const List: StoreState = initMovies;
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

export async function getSearchMovieList(inputs: string) {
  try {
    const List: StoreState = initMovies;
    List.searchArray = await fetch(ApiUrl.searchQuery + inputs).then((res) =>
      res.json()
    );
    store.dispatch({ type: getSearchList, movies: List });
  } catch (e) {
    /* TODO */
  }
}

export async function getMovieDetail(id: number) {
  try {
    const List: StoreState = initMovies;
    List.movieDetail = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=" +
        ApiUrl.key +
        "&language=ko"
    ).then((res) => res.json());
    store.dispatch({ type: getMovieInfo, movies: List });
  } catch (e) {
    /* TODO */
  }
}

export async function getMovieActors(id: number) {
  try{
    const List: StoreState = initMovies;
    List.movieActors = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=" +
        ApiUrl.key
    ).then((res) => res.json());
    store.dispatch({ type: getMovieActor, movies: List });
  } catch(e){
    /* TODO */
  }
}

const reducer = (state = initMovies, action: MovieArrayAction) => {
  switch (action.type) {
    case getMainList:
      return {
        ...state,
        popularArray: action.movies.popularArray,
        topRatedArray: action.movies.topRatedArray,
        nowPlayingArray: action.movies.nowPlayingArray,
      };
    case getSearchList:
      return {
        ...state,
        searchArray: action.movies.searchArray,
      };
    case getMovieInfo:
      return {
        ...state,
        movieDetail: action.movies.movieDetail,
      };
    case getMovieActor:
      return{
        ...state,
        movieActors: action.movies.movieActors,
      }
    default:
      return state;
  } //수정필요
};

export const store = createStore(reducer, applyMiddleware(thunk));
