/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo:{
        state:boolean,
        openid?:string,
        name?:string,
        avatarUrl?:string,
    },
    aricleInfo:any,
    refreshHome?:Function | null
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}