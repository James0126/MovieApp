import React, { useEffect, useState } from "react";
import ActorListItem from "./ActorListItem";
import * as Search from "./Search";
import * as ApiUrl from "./ApiUrl";

export default function ActorList({ movieId }: ActorListData) {
  const [loading, setLoading] = useState<boolean>(true);
  const [actors, setActors] = useState<ActorInfo[]>([]);

  useEffect(() => {
    Search.searchActors(ApiUrl.key, setLoading, setActors, movieId);
  }, [movieId]);

  return loading ? (
    <span>로딩중...</span>
  ) : !actors ? (
    <span>정보가 없음</span>
  ) : (
    <section className="actorListWrapper">
      <section className="actorList">
        {actors.map((a: ActorInfo, index: number) => {
          return <ActorListItem actorData={a} key={index} />;
        })}
      </section>
    </section>
  );
}
