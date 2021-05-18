import React from "react";
import * as apiUrl from "../apiAction/apiUrl";

const ActorListItem = ({ actor }: ActorListItem) => (
  <article className="actorListItem card">
    <img
      className="actorImg"
      src={apiUrl.posterImage + actor.profile_path}
      alt="배우 프로필 이미지"
      style={
        !actor.profile_path ? { width: "250px", height: "300px" } : {}
      }
    />
    <h1 className="actorName">{actor.name}</h1>
    <p className="actorCharacter">{actor.character} 역</p>
  </article>
);
export default ActorListItem;
