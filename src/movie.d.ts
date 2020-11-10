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
    clickFn:MouseEvent<HTMLAnchorElement, MouseEvent>
    pageState:string
}

interface MovieListItemData {
    movieData:Movie
    index:number
    clickFn:MouseEvent<HTMLAnchorElement, MouseEvent>
    pageState:string
}

interface MovieListProps{
    clickFn:MouseEvent<HTMLAnchorElement, MouseEvent>
}

interface MovieSearchSpace{
    pageState:string
    clickFn:MouseEvent<HTMLAnchorElement, MouseEvent>
}

interface MovieObject{
    movie:Movie
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
    actorList:ActorInfo[]
    loading:boolean
}

interface ActorListItemData{
    actorData:ActorInfo
}