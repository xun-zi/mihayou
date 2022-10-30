const Base = require('./base.js');
const rp = require("request-promise");

module.exports = class extends Base {
  async loginAction() {
    //登录
    const fullUserInfo = this.post("info");
    const isRegister = this.post("isRegister");
    const code = fullUserInfo.code;
    // 获取openid
    const options = {
      method: "GET",
      url: "https://api.weixin.qq.com/sns/jscode2session",
      qs: {
        grant_type: "authorization_code",
        js_code: code,
        secret: think.config("weixin.secret"),
        appid: think.config("weixin.appid"),
      },
    };
    
    let sessionData = await rp(options);
    //seession = {seesion_key,openid}
    sessionData = JSON.parse(sessionData);
    if (!sessionData.openid) {
      return this.fail("登录失败1");
    }

    const model = this.model('user')
    const addData = {
      ...fullUserInfo,
      ...sessionData,
    };
    let openid = sessionData.openid;
    if(think.isEmpty(await model.where({openid}).select())){
      model.add(addData);
      this.model('replaycount').add({
        openid,
        cnt:0,
      })

      this.model('star_big').add({
        openid,
        cntStar:0,
        cntStared:0
      })

      this.model('dynamicCnt').add({
        openid,
        cnt:0
      })

      console.log('新用户');
    }else{
      if(isRegister)model.where({openid}).update(addData);
      console.log('这是老用户');
    }
    
    const tokenServer = this.service('token','api');
    

    const token = tokenServer.create(openid);

    const userData = await this.model('user').fieldReverse('session_key').where({
      openid:sessionData.openid
    }).find();

    return this.success({
      token,
      userData
    });
    
  }

};
