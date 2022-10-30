const jwt = require("jsonwebtoken");
const secret = "sdfsdfsdf123123!ASDasdasdasdasda";

module.exports = class extends think.Service {
    parse(token) {
        let userInfo = jwt.verify(token,secret);
        return userInfo;
    }
    create(userInfo) {
        const token = jwt.sign(userInfo, secret);
        return token;
    }
};
