export type aricleInfo = {
    imgUrl: string[],
    openid: string,
    name: string,
    avatarUrl: string,
    id: string,
    imgCount: string,
    time: number,
    praise: number,
    commit: number,
    isPraise: boolean
}

export type Comment = {
    id:number,
    openid:string,
    avatarUrl:string,
    name:string,
    time:string,
    content:string,
    aim:string,
    replayAim:string,
    replayName:string,
    replayCnt:number,
    comment2:[],
}