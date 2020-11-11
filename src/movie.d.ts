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
    url:string
    searchMovieFn:MouseEvent<HTMLAnchorElement, MouseEvent>
    pageState:string
}

interface MovieListItemData {
    movieData:Movie
    index:number
    searchMovieFn:MouseEvent<HTMLAnchorElement, MouseEvent>
    pageState:string
}

interface MovieListProps{
    searchMovieFn:MouseEvent<HTMLAnchorElement, MouseEvent>
}

interface MovieSearchSpace{
    pageState:string
    searchMovieFn:MouseEvent<HTMLAnchorElement, MouseEvent>
}

interface MovieIdObject{
    movieId:number
}

interface MovieArrayObject{
    movieArray:Movie[]
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
    movieId:number
}

interface ActorListItemData{
    actorData:ActorInfo
}