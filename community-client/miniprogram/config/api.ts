const baseUrl = 'http://127.0.0.1:8063/api/';
// http://127.0.0.1:8063/api/auth/login

export default {
    authLogin:baseUrl + 'auth/login',
    aricleUpload:baseUrl + 'aricle/upload',
    aricleDynamicCnt:baseUrl + 'aricle/dynamicCnt',
    aricleDynmicAricles:baseUrl + 'aricle/dynamicAricles',
    aricleGet:baseUrl + 'aricle/get',
    ariclePraise:baseUrl + 'aricle/praise',
    aricleGetPage:baseUrl + 'aricle/getPage',
    aricleKeywordFind:baseUrl + 'aricle/keywordFind',
    ariclegetComment:baseUrl + 'aricle/getComment',
    ariclePostComtent:baseUrl + 'aricle/postComment',
    aricleGetReplayCnt:baseUrl + 'aricle/getReplayCnt',
    aricleGetReplay:baseUrl + 'aricle/getReplay',
    userIsStar:baseUrl + 'user/isStar',
    userStar:baseUrl + 'user/star',
    userGetStarBig:baseUrl + 'user/getStarBig',
}