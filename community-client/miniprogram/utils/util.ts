export const formatTime = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return (
        [year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':')
    )
}



const formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
}

type method = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
type thinkjsReturn = {
    errno: number,
    errmsg: string,
    data: any;
}
function request(url: string, data = {}, method: method = "GET"): Promise<thinkjsReturn> {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data: data,
            method: method,
            header: {
                "Content-Type": "application/json",
                "client-token": wx.getStorageSync("token"),
            },
            success: function (res: any) {
                if (res.statusCode == 200) {
                    if (res.data.errno !== 401) {
                        resolve(res.data);
                    }
                } else {
                    reject(res.errMsg);
                }
            },
            fail: function (err) {
                reject(err);
            },
        });
    });
}

function aricleImgUrl(id: string, acount: number) {
    return `http://127.0.0.1:8063/static/image/aricle_${id}/${acount}.jpg`;
}



export default {
    request,
    aricleImgUrl
}