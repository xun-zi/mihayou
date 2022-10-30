import util from "../../utils/util"
import api from "../../config/api"
const gd = getApp().globalData;
// pages/personalSpace/personalSpace.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{
            avatarUrl:'',
        },
        starBig:{
            cntStar:0,
            cntStared:0,
        },
    },
    userExit(){
        console.log('退出')
        wx.removeStorageSync('token');
        wx.setStorageSync("userInfo",{
            state:false
        })
        gd.userInfo.state = false;
        wx.redirectTo({
            url:'/pages/login/login'
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        util.request(api.userGetStarBig).then((res) => {
            console.log(res.data);
            this.setData({
                starBig:res.data.starBig
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        // console.log(gd.userInfo)
        this.setData({
            userInfo:gd.userInfo
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