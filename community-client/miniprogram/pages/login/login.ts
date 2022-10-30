import api from '../../config/api'
import util from '../../utils/util'
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
const app = getApp();
// pages/login/login.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "",
        avatarUrl: defaultAvatarUrl,
        isRegister:false,
    },
    register(){
        const {isRegister} = this.data;
        this.setData({
            isRegister:!isRegister
        })
    },
    onChooseAvatar(e: any) {
        this.setData({
            avatarUrl: e.detail.avatarUrl
        })
    },
    loginEv() {
        wx.login({
            success: (res) => {
                let loginParams = {
                    code:res.code,
                    name: this.data.value,
                    avatarUrl: this.data.avatarUrl
                }
                util.request(api.authLogin,{
                    info:loginParams,
                    isRegister:this.data.isRegister
                },"POST").then((res:any) => {
                    wx.setStorageSync("token",res.data.token);
                    const da = res.data;
                    wx.setStorageSync("userInfo",{
                        state:true,
                        ...da.userData
                    })
                    app.globalData.userInfo = {
                        state:true,
                        ...da.userData
                    }
                    wx.switchTab({
                        url:'/pages/home/home'
                    })
                })
            }
        });
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

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