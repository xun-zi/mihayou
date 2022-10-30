import { aricleInfo as  AricleInfo} from '../../type/aricle';
import api from '../../config/api';
import util from '../../utils/util';

const App = getApp();
const aricleInfo:AricleInfo = {
    imgUrl:[],
    openid:'',
    name:'加载中',
    avatarUrl:'',
    id:'',
    imgCount:'',
    time:0,
    praise:0,
    commit:0,
    isPraise:false,
}
// components/aricle/aricle.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        aricleInfo: {
            type: Object,
            value: aricleInfo
        },
        isHome:{
            type:Boolean,
            value:false
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        isStar:true,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        previewImg({target}:any){
            const {index} = target.dataset.index;
            const {imgUrl} = this.data.aricleInfo;
            console.log(index);
            wx.previewImage({
                current:imgUrl[index],
                urls:imgUrl
            })
        },
        clickPraise() {
            const { aricleInfo } = this.data;
            let curSt = aricleInfo.isPraise;
            aricleInfo.isPraise = !curSt;
            aricleInfo.praise += curSt ? -1 : 1;
            this.setData({
                aricleInfo
            })
            util.request(api.ariclePraise, {
                id: aricleInfo.id,
            }, "POST");
            return false;
        },
        Skip(){
            const {aricleInfo} = this.data;
            console.log('skip');
            if(!this.data.isHome)return;
            App.globalData.aricleInfo = this.data.aricleInfo;
            wx.navigateTo({
                url:`/pages/aricle/aricle?id=${aricleInfo.id}`,
                fail(e){
                    console.log(e);
                }
            })
        },
        star(){
            const { aricleInfo } = this.data;
            util.request(api.userStar,{
                openid1:aricleInfo.openid,
            },"POST").then((res:any) => {
                console.log(res);
                this.setData({
                    isStar:res.data.star
                })
            });
        }
    },
    lifetimes: {
        attached: function () {
            const { aricleInfo } = this.data;
            util.request(api.userIsStar,{
                openid1:aricleInfo.openid
            },"GET").then((res:any) => {
                // console.log('isStar',res);
                this.setData({
                    isStar:res.data.star
                }) 
            })
            this.setData({
                aricleInfo
            })
            // console.log(aricleInfo)
        }
    }
})
