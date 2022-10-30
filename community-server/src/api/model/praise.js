module.exports = class extends think.Model {
    async updataPraise(openid, id) {
        const aricle = this.model('aricle');
        const praise = this.model('praise');
        const data = await aricle.where({
            id
        }).find();
        console.log('praise-data',data);
        const isEmpty = await praise.where({
            id,
            openid,
        }).find();
        console.log('isEmpty',isEmpty)
        if (think.isEmpty(isEmpty)) {
            praise.add({
                id,
                openid
            })
            //文章更新
            aricle.where({
                id
            }).update({
                praise: data.praise + 1,
            })
        }else {
            praise.where({
                id,
                openid,
            }).delete();

            aricle.where({
                id
            }).update({
                praise: data.praise - 1,
            })
        }
    }
};
