export const main = "https://api.themoviedb.org/3/";
export const mainImage: string = "https://image.tmdb.org/t/p/";

export const key: string = "?api_key=9b23722584d210cca2fa13d04af8f489";
export const lang: string = "&language=ko";

export const posterImage: string = `${mainImage}w200/`;
export const detailImage: string = `${mainImage}w400/`;
export const backgroundImage: string = `${mainImage}original/`;
export const searchQuery: string = `${main}search/movie${key + lang}&query=`;
export const popular: string = `${main}movie/popular${key + lang}`;
export const nowPlaying: string = `${main}movie/now_playing${key + lang}`;
export const topRated: string = `${main}movie/top_rated${key + lang}`;
