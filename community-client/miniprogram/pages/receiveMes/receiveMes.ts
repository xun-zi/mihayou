// pages/receiveMes/receiveMes.ts

import api from "../../config/api"
import util from "../../utils/util"
const App = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messages:[],
        userInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        util.request(api.aricleGetReplay,{}).then((res) => {
            let replays = wx.getStorageSync('replays') || [];
            replays.unshift(...res.data.replays.reverse());
            replays = replays.slice(0,20);
            wx.setStorageSync('replays',replays);
            console.log(res.data.replays);
            this.setData({
                messages:replays
            })
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        const data = App.globalData.userInfo;
        console.log(data);
        this.setData({
            userInfo:data,
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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