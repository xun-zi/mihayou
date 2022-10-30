import api from "../../config/api";
const FormData = require('../../utils/wx-formData/formData');
// pages/releaseArticle/releaseArticle.ts
type fileList = {
    url:string,
    name:string,
}
const defaultFileList:fileList[] = [];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        fileList: defaultFileList,
    },
    afterRead(event:any) {
        const { file } = event.detail;
        console.log(file);
        const {fileList = []} = this.data;
        fileList.push({
            name:fileList.length,
            ...file
        })
        console.log(fileList)
        this.setData({
            fileList
        })
    },
    send(){
        const that = this;
        const {fileList} = this.data;
        let formData = new FormData();
        formData.append('value',this.data.value);
        formData.append('number',fileList.length);
        fileList.forEach((data,index) => {
            formData.appendFile(index,data.url);
        })
        const data = formData.getData();
        console.log(formData);
        wx.request({
            url:api.aricleUpload,
            method:"POST",
            header: {
                "Content-Type": data.contentType,
                "client-token": wx.getStorageSync("token"),
            },
            data:data.buffer,
            success(){
                that.setData({
                    value:'',
                    fileList:[],
                });
                wx.switchTab({
                    url:'/pages/home/home',
                });
            }
        });
        
    },
    deleteImg(event:any){
        const {fileList = []} = this.data;
        const index = event.detail.index;
        fileList.splice(index,1);
        this.setData({
            fileList
        })
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