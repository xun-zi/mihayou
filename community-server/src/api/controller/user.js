const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async isStarAction(){
    const openid0 = this.verifyToken();
    const openid1 = this.get('openid1');
    const starSmall = this.model('star_small');
    const star = !think.isEmpty(await starSmall.where({openid0,openid1}).find());
    return this.success({
      star
    })
  }

  async starAction(){
    const openid0 = this.verifyToken();
    const openid1 = this.post('openid1');
    const starSmall = this.model('star_small');
    const starBig = this.model('star_big');
    const star = !think.isEmpty(await starSmall.where({openid0,openid1}).find());

    const MesStar0 = await starBig.where({openid:openid0}).find();
    const MesStar1 = await starBig.where({openid:openid1}).find();

    if(star){
      starSmall.where({openid0,openid1}).delete();
      
      starBig.where({openid:openid0}).update({
        cntStar:MesStar0.cntStar - 1
      });
      starBig.where({openid:openid1}).update({
        cntStared:MesStar1.cntStared - 1
      })
    }else{
      starSmall.where({openid0,openid1}).add({
        openid0,
        openid1,
      });
      starBig.where({openid:openid0}).update({
        cntStar:MesStar0.cntStar + 1
      });
      starBig.where({openid:openid1}).update({
        cntStared:MesStar1.cntStared + 1
      })
    }

    this.success({
      star:!star
    })
  }

  async getStarBigAction(){
    const openid0 = this.verifyToken();
    const model = this.model('star_big');
    const result = await model.where({openid:openid0}).find();
    console.log('openid0',openid0);
    console.log('result',result);
    return this.success({
      starBig:result
    });
  }
};
