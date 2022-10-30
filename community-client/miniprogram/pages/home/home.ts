import api from "../../config/api";
import util from "../../utils/util"
import { aricleInfo } from '../../type/aricle'
const aricleInfos: aricleInfo[] = [];

export function ariclehandle(data: aricleInfo[]) {
    const res: aricleInfo[] = []
    data.forEach((curData: aricleInfo) => {
        const imgUrl = [];
        const { imgCount, id } = curData
        for (let i = 0; i < +imgCount; i++) {
            imgUrl.push(util.aricleImgUrl(id, i));
        }
        curData.imgUrl = imgUrl;
        res.push(curData)
    });
    return res;
}

// pages/home/home.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        aricleInfos,
        showBackTop: false,
        cnt: 1,
        value:'',
    },
    onPageScroll: function (e: any) {
        const { scrollTop } = e;
        if (scrollTop <= 100) {
            this.setData({
                showBackTop: false
            })
        } else {
            this.setData({
                showBackTop: true,
            })
        }
    },
    navIntoMes() {
        wx.navigateTo({
            url: "/pages/receiveMes/receiveMes"
        })
    }
    ,
    backTop() {
        wx.pageScrollTo({
            scrollTop: 0
        })
    }
    ,
    keywordFind(e: any) {
        const that = this;
        util.request(api.aricleKeywordFind, {
            text: e.detail
        }, "POST").then((res) => {
            console.log(res.data);
            
            that.setData({
                aricleInfos: ariclehandle(res.data),
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
    },
    imgUrl: util.aricleImgUrl,
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.onLoad();
        util.request(api.aricleGetPage, {
            id:0,
        }, "GET").then((res) => {
            if (res.errno === 0) {
                this.setData({
                    aricleInfos:ariclehandle(res.data).reverse()
                })
            }
        })
        util.request(api.aricleGetReplayCnt).then((res: any) => {
            // console.log("getMes", res.data);
            this.setData({
                cnt: res.data.mes
            })
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})