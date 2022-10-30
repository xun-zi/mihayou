// default config
module.exports = {
  port:8063,
  default_module: "api",
  weixin: {
    appid: "wx43dd7f4f55f1c208", // 小程序 appid
    secret: "8f3ea3695233c4162aba4e170de82310", // 小程序密钥
    mch_id: "", // 商户帐号ID
    partner_key: "", // 微信支付密钥
    notify_url: "https://shopserver.jzzz66.cn/api/pay/notify", // 微信支付异步通知
  },
};
