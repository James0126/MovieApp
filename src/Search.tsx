import React, { Dispatch } from "react";

export async function searchMovie(
  apiAddres: string,
  setLoading: Dispatch<React.SetStateAction<boolean>>,
  setMovieData: Dispatch<React.SetStateAction<Movie[]>>,
  pageNum: number = 1
) {
  try {
    // TODO
    const response = await fetch(apiAddres + "&page=" + pageNum).then((res) =>
      res.json()
    );

    response === null ? setLoading(true) : setMovieData(response.results);
    console.log(response.results);
  } catch (e) {
    throw new Error(e);
    // TODO
  }
  setLoading(false);
}

export async function searchActors(
  apikey: string,
  setLoading: Dispatch<React.SetStateAction<boolean>>,
  setActorData: Dispatch<React.SetStateAction<ActorInfo[]>>,
  movieId: number
) {
  try {
    // TODO
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?api_key=" +
        apikey
    ).then((res) => res.json());

    response === null ? setLoading(true):setActorData(response.cast);
  } catch (e) {
    throw new Error(e);
    // TODO
  }
  setLoading(false);

}
