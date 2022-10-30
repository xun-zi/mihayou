const crypto = require('crypto');
const rp = require('request-promise');

module.exports = class extends think.Service {
    async decryptUserInfoData(sessionKey, encryptedData, iv) {
        // base64 decode
        const _sessionKey = Buffer.from(sessionKey, 'base64');
        encryptedData = Buffer.from(encryptedData, 'base64');
        iv = Buffer.from(iv, 'base64');
        let decoded = '';
        try {
            // 解密
            const decipher = crypto.createDecipheriv('aes-128-cbc', _sessionKey, iv);
            // 设置自动 padding 为 true，删除填充补位
            decipher.setAutoPadding(true);
            decoded = decipher.update(encryptedData, 'binary', 'utf8');
            decoded += decipher.final('utf8');
            decoded = JSON.parse(decoded);
        } catch (err) {
            console.log('解密出错')
            return '';
        }
        if (decoded.watermark.appid !== think.config('weixin.appid')) {
            console.log('appid错误')
            return '';
        }
        console.log(decoded )
        return decoded;
    }
};
