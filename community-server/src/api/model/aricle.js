module.exports = class extends think.Model {
    async ariclesAddUserMessage(lists, openid) {
        //使用记忆化搜索获取用户信息(name,avatarUrl)
        //使用openid与id查看用户是否点赞isPrasie
        let user = this.model('user');
        let praise = this.model('praise');
        const userData = new Map();
        const returnData = [];
        for (let i = 0; i < lists.length; i++) {
            const list = lists[i]
            const curOpenid = list.openid;
            if (!userData.has(curOpenid)) {
                const curUser = await user.field('name,avatarUrl').where({ openid: curOpenid }).find();
                userData.set(curOpenid, curUser);
            }
            const isPraise = !think.isEmpty(await praise.where({ openid, id: list.id }).find());
            returnData.push({
                ...list,
                time: new Date(list.time * 1000).toLocaleString(),
                ...userData.get(curOpenid),
                isPraise,
            })
        }
        return returnData
    }

    async keywordFind(text,openid) {
        //模糊查找获取aricles
        //aricleAddUserMe
        const aricle = this.model('aricle');
        const lists = await aricle.where({
            content: ['like', `%${text}%`]
        }).select();
        const data = await aricle.ariclesAddUserMessage(lists,openid);
        return data;
    }
};
