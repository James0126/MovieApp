import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ActorListItem from "./ActorListItem";
import * as action from "../apiAction/action";

const ActorList = () => {
  const storeState = useSelector<StoreState, StoreState>((state) => state);
  const { pathname } = useLocation();
  useEffect(() => {
    //사용자에 의해 바뀌기 때문에 받아온 id가 다를때 마다 호출
    const id: string[] = pathname.toString().split("/");
    action.getMovieActors(parseInt(id[id.length - 1]));
  }, [pathname]);

  return !storeState.movieActors.cast ? (
    <span>로딩중...</span>
  ) : (
    <section className="actorListWrapper">
      <section className="actorList">
        {storeState.movieActors.cast.map((actor: Actor, index: number) => (
          <ActorListItem actor={actor} key={index} />
        ))}
      </section>
    </section>
  );
};
export default ActorList;
