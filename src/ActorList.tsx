import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActorListItem from "./ActorListItem";
import * as Action from "./Action";

export default function ActorList({ movieId }: ActorListData) {
  const storeState = useSelector<StoreState, StoreState>((state) => state);
  useEffect(() => {
    Action.getMovieActors(movieId);
  }, [movieId]);

  console.log(storeState);
  return storeState.movieActors.cast === [] ? (
    <span>로딩중...</span>
  ) : (
    <section className="actorListWrapper">
      <section className="actorList">
        {storeState.movieActors.cast.map((a: ActorInfo, index: number) => {
          return <ActorListItem actorData={a} key={index} />;
        })}
      </section>
    </section>
  );
}
