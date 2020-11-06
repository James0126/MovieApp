import React from 'react';
import ActorListItem from './ActorListItem'

export default function Actor_List({ actorList, loading}: ActorListData){
    if (loading) return <div>로딩중...</div>;
    else if (!actorList) return <div>정보가 없음</div>;
    else {
      return (
        <section className="actorListWrapper">
            <section className="actorList">
            {actorList.map((a: ActorInfo, index: number) => {
                return(<ActorListItem actorData={a} key={index}/>);
            })}
            </section>
        </section>
        
      );
    }
}