interface Movie {
    id: number
    title: string
    release_date: string
    popularity: number
    backdrop_path: string
    poster_path: string
    original_language: string
    overview: string
}

interface MovieListData{
    movieArray:Movie[]
    loading:boolean
    onClick:MouseEvent<HTMLAnchorElement, MouseEvent>
}

interface MovieListItemData {
    movieData:Movie
    index:number
    onClick:MouseEvent<HTMLAnchorElement, MouseEvent>

}

interface MovieList_Props{
    onClick:MouseEvent<HTMLAnchorElement, MouseEvent>
    apiKeys:string
}

interface MovieObject{
    movie:Movie
    apiKeys:string
}

interface GetAddres{
    apiAddres:string
    pageNum:number
}

interface ActorInfo{
    cast_id:number
    character:string
    credit_id:string
    gender:number
    id:number
    name:string
    order:number
    profile_path:string
}

interface ActorListData{
    actorList:ActorInfo[]
    loading:boolean
}

interface ActorListItemData{
    actorData:ActorInfo
}