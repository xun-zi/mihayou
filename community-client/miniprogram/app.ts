// app.ts
import api from "./config/api";
import util from "./utils/util";
App<IAppOption>({
    globalData: {
        userInfo: {
            state: false,
            name: '',
            openid: '',
            avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
        },
        aricleInfo: {},
        refreshHome:null,
    },
    
    onLaunch() {
        const that = this;
        const userInfo = wx.getStorageSync('userInfo');
        if (userInfo.state) {
            that.globalData.userInfo = userInfo;
            util.request(api.aricleDynamicCnt).then((res) => {
                console.log(res.data);
                const { dyCnt } = res.data;
                if (dyCnt) {
                    wx.setTabBarBadge({
                        index: 1,
                        text: dyCnt + '',
                    })
                }
            });
            wx.switchTab({
                url: '/pages/home/home'
            })
        }
    },
})