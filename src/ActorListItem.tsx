import React from 'react';

export default function Actor_List({actorData}:ActorListItemData){
    const imageData: string = "https://image.tmdb.org/t/p/w200/";
    return (
        <article className="actorListItem card">
            <img
                className="actorImg"
                src={imageData + actorData.profile_path}
                alt="이미지 정보없음"
                style={
                actorData.profile_path === null
                    ? { width: "250px", height: "300px"}
                    : {}
                }
            />
            <h1 className="actorName">{actorData.name}</h1>
            <p className="actorCharacterName">{actorData.character} 역</p>
        </article>
  );
}