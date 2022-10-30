
import { think } from "thinkjs";
import fs from 'fs';
import * as path from 'path';

module.exports = class extends think.Controller {
  __before() {

  }
  verifyToken() {
    const tokenSer = this.service('token', 'api');
    try {
      const userInfo = tokenSer.parse(this.ctx.header['client-token']);
      if (think.isEmpty(userInfo)) return this.fail('token有问题');
      return userInfo;
    } catch (err) {
      console.log(err);
    }
    if (think.isEmpty(userInfo)) return this.fail('token有问题');
  }
};
