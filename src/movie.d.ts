interface Movie {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  overview: string;
}

interface SearchList {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

interface MovieList {
  movies: Movie[];
  horizontal: boolean;
}

interface MovieListItem {
  movie: Movie;
  horizontal: boolean;
}

interface MovieArrayObject {
  movies: Movie[];
}

interface StoreState {
  popular: SearchList;
  topRated: SearchList;
  nowPlaying: SearchList;
  search: SearchList;
  movieDetail: Movie;
  movieActors: ActorListObject;
}

interface MovieArrayAction {
  type: string;
  movies: MainPageMovies;
}

interface Actor {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

interface ActorListObject {
  cast: Actor[];
  crew: Actor[];
  id: number;
}

interface ActorListItem {
  actor: Actor;
}
