const mongoose = require("mongoose");

// 定义对应的 Schema
const userSchema = new mongoose.Schema(
  {
    id: String, // mongodb 自动生成的 id
    loginId: String, // 账号
    loginPwd: String, // 密码
    avatar: String, // 头像
    nickname: String, // 昵称
    mail: String, // 邮箱
    qq: String, // QQ
    wechat: String, // 微信号
    intro: String, // 个人介绍
    registerDate: String, // 注册时间
    lastLoginDate: String, // 上次登录事件
    points: Number, // 积分
    enabled: Boolean, // 是否可用
  },
  {
    versionKey: false,
  }
);

// 通过 Schema 来创建相应的数据模型
// 创建数据模型的方法为 mongoose.model，只传一个名字，代表查找到对应名字的模型
// 如果传入 Schema，代表创建模型 (1) 给模型取一个名字 （2）对应的 Schema （3）对应的集合

mongoose.model("userModel", userSchema, "users");

// 将此模型进行导出
module.exports = mongoose.model("userModel");

