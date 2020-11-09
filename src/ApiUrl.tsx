export const key:string = "9b23722584d210cca2fa13d04af8f489";
export const language:string = "&language=ko"
export const searchQuery: string =
  "https://api.themoviedb.org/3/search/movie?api_key=" + key + language + "&query=";
export const popularUrl: string =
  "https://api.themoviedb.org/3/movie/popular?api_key=" + key + language;
export const nowPlayingUrl: string =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" + key + language;
export const topRatedUrl: string =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" + key + language;
