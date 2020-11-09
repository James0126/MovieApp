import React from 'react';
import ActorListItem from './ActorListItem'

export default function ActorList({ actorList, loading}: ActorListData){
    if (loading) return <span>로딩중...</span>;
    else if (!actorList) return <span>정보가 없음</span>;
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