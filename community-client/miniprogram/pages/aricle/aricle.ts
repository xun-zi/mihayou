import api from "../../config/api";
import { Comment } from "../../type/aricle";
import util from "../../utils/util";
import paces from'../../image/pace/pace';

const globalData = getApp().globalData;
// pages/aricle/aricle.ts


const comment: Comment[] = [];
Page({
    spaceFN() {

    },
    /**
     * 页面的初始数据
     */
    data: {
        aricleInfo: {},
        isLoad: false,
        pla: '',
        replayAim: '',
        aricleId: '',
        comment: comment,
        content: '',
        replayName: '',
        aimContent: '',
        inputState: '',
        paces
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option: any) {
        //拿取home中数据
        if (option.id == globalData.aricleInfo.id) {
            const { aricleInfo } = globalData;
            this.setData({
                aricleInfo: aricleInfo,
                isLoad: true,
                aricleId: option.id,
                pla: `发送给${aricleInfo.name}`,
                replayName: aricleInfo.name,
                replayAim: aricleInfo.openid,

            })
        }

        util.request(api.ariclegetComment, {
            aricleId: option.id,
        }, "GET").then((res: any) => {

            this.setData({
                comment: res.data.comments
            })
        })
    },
    paceEv() {
        const { inputState } = this.data;
        this.setData({
            inputState: (inputState != '表情') ? '表情' : '',
        })
        console.log(inputState)
    },
    addPace({target}:any){
        const {content} = this.data;
        this.setData({
            content:content + `[${target.dataset.pace}]`,
        })
    },
    send() {
        const { replayAim, content, aricleId, replayName, aimContent } = this.data;
        util.request(api.ariclePostComtent, {
            replayAim,
            content,
            aricleId,
            replayName,
            aimContent
        }, "POST").then(({ data }) => {
            console.log(data);
            const { comment } = this.data;
            
            comment.push(data);
            this.setData({
                comment,
            })
        })
        this.setData({
            content: ''
        });
    },
    
    changePla({ target }: any) {
        console.log(target);
        const { openid, name, aimContent } = target.dataset;
        this.setData({
            pla: `发送给${name}`,
            replayAim: openid,
            replayName: name,
            aimContent
        })
        console.log(aimContent)
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