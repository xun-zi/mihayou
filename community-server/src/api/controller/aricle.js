const Base = require('./base.js');
const fs = require('fs');
const path = require('path')
module.exports = class extends Base {
  //获得动态数
  async dynamicCntAction() {
    const openid = this.verifyToken();
    const dyCnt = await this.model('dynamicCnt').where({ openid }).find();
    return this.success({
      dyCnt: dyCnt.cnt,
    })
  }
  //动态获得
  //删除动态
  //动态计数清零
  async dynamicAriclesAction() {
    const openid = this.verifyToken();
    const dy = await this.model('dynamic').where({ openid }).select();
    if (think.isEmpty(dy)) {
      return this.success({
        aricles: []
      })
    }
    this.model('dynamicCnt').where({ openid }).update({
      cnt: 0,
    });
    this.model('dynamic').where({ openid }).delete();
    const aricleIds = [];
    for (let i = 0; i < dy.length; i++) {
      const aricleId = dy[i].aricleId;
      aricleIds.push(aricleId);
    }
    const aricles = await this.model('aricle').where({
      id: ['IN', aricleIds]
    }).select();
    const returnData = await this.model('aricle').ariclesAddUserMessage(aricles, openid);
    console.log(returnData);
    return this.success({
      aricles: returnData,
    })
  }

  //消息回复获得
  //消息清零
  //删除消息
  async getReplayAction() {
    const myOpenid = this.verifyToken();
    const data = await this.model('replaycontent').where({
      replayOpenid: myOpenid
    }).select();
    this.model('replaycontent').where({ replayOpenid: myOpenid }).delete();
    this.model('replaycount').where({ openid: myOpenid }).update({
      cnt: 0
    });
    return this.success({
      replays: data
    });
  }

  //获得回复的计数
  async getReplayCntAction() {
    const myOpenid = this.verifyToken();
    const data = await this.model('replaycount').where({
      openid: myOpenid
    }).find();
    console.log(data);
    return this.success({
      mes: data.cnt,
    })
  }

  //评论块
  async getCommentAction() {
    const aricleId = this.get('aricleId');
    const comments = await this.model('aricle_com').where({ aricleId }).select();
    for (let i = 0; i < comments.length; i++) {
      comments[i].time = new Date(comments[i].time * 1000).toLocaleString();
      // comments.comment2 = JSON.parse(comments.comment2);
    }
    console.log(comments);
    return this.success({
      comments,
    })
  }


  async postCommentAction() {
    const myOpenid = this.verifyToken();

    const post = this.post();
    const userData = await this.model('user').where({ openid: post.replayAim }).find();
    //{ replayAim: '', content: '', aricleId: '25', replayName: '' }格式
    // console.log(post);
    const aricle_com = this.model('aricle_com');
    const newData = {
      ...userData,
      ...post,
      time: new Date().getTime() / 1000,
      openid: myOpenid,
      replayCnt: 0,
    }
    newData.id = await aricle_com.add(newData);
    newData.time = new Date(newData.time * 1000).toLocaleString();
    //统计消息数+1
    const a = await this.model('replaycount').where({
      openid: post.replayAim
    }).find();
    console.log(a);
    this.model('replaycount').where({
      openid: post.replayAim
    }).update({
      ...a,
      cnt: a.cnt + 1,
    })
    //replayContent
    // console.log('replay',post.replayAim);
    this.model('replaycontent').add({
      replayOpenid: post.replayAim,
      avatarUrl: userData.avatarUrl,
      name: userData.name,
      replaycontent: post.content,
      content: post.aimContent,
      time: new Date().toLocaleString(),
      openid1: myOpenid,
      replayCnt: 0
    })

    return this.success(newData);
  }

  //文章操作和上传
  async keywordFindAction() {
    console.log('keywordFind')
    const openid = this.verifyToken();
    const aricle = this.model('aricle');
    const text = this.post('text');
    const data = await aricle.keywordFind(text, openid);
    console.log(data);
    return this.success(data);
  }


  async uploadAction() {
    const userInfo = this.verifyToken();
    const model = this.model('aricle');
    const id = await model.add({
      openid: userInfo,
      content: this.post('value'),
      imgCount: this.post('number'),
      time: new Date().getTime() / 1000,
      praise: 0,
      commit: 0,
    });

    const stars = await this.model('star_small').field(`openid0`).where({ openid1: userInfo }).select();
    console.log(stars);
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i].openid0;
      this.model('dynamic').add({
        openid: star,
        aricleId: id
      });
      const dyCnt = await this.model('dynamicCnt').where({ openid: star }).find();
      this.model('dynamicCnt').where({ openid: star }).update({ cnt: dyCnt.cnt + 1 });
    }


    const savePath = path.join(think.ROOT_PATH, 'www/static/image/' + `aricle_${id}`);
    think.mkdir(savePath);
    const readFile = think.promisify(fs.readFile, fs);
    const writeFile = think.promisify(fs.writeFile, fs);
    const file = this.file();
    for (let i = 0; i < +this.post('number'); i++) {
      let id = i + '';
      const buffer = await readFile(file[id].path);
      await writeFile(path.join(savePath, id + '.jpg'), buffer)
    }
    return this.success("成功");
  }

  //文章推荐
  async getPageAction() {
    const openid = this.verifyToken();
    const id = this.get('id');
    let aricle = this.model('aricle');
    const lists = await aricle.page(id, 10).select();
    const returnData = await aricle.ariclesAddUserMessage(lists, openid);
    return this.success(returnData)
  }

  async getAction() {
    const openid = this.verifyToken();
    const id = this.get('id');
    if (!id) return this.fail('id不存在');
    let aricle = this.model('aricle');
    let data = await aricle.where({
      id: id,
    }).select();
    const aricleAddUserMe = await aricle.ariclesAddUserMessage(lists, openid);
    return this.success(aricleAddUserMe[0]);
  }


  //点赞
  async praiseAction() {
    const userId = this.verifyToken();
    const query = this.post();
    await this.model('praise').updataPraise(userId, query.id);
    return this.success();
  }
};
