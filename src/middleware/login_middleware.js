const fs = require("fs");
const jwt = require("jsonwebtoken");
const UserService = require("../service/user_service");
const {
  UNAME_OR_PASSWORD_IS_REQUIRE,
  USER_IS_UNREGISTER,
  PASSWORD_ERROR,
  UNAUTHENTICATION,
} = require("../config/error");

const { encrypt } = require("../utils/encrypt");
const { PUBLICKEY } = require("../config/keys");

async function verifyLogin(ctx, next) {
  const { username, password } = ctx.request.body;
  // 1.判断用户名和密码是否为空
  if (!username || !password) {
    return ctx.app.emit("error", UNAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }
  // 2.查询该用户是否已经注册
  const users = await UserService.findUserByName(username);
  if (users.length <= 0) {
    return ctx.app.emit("error", USER_IS_UNREGISTER, ctx);
  }
  // 3.查询数据库中密码和用户传递的密码是否一致
  if (users[0].password !== encrypt(password)) {
    return ctx.app.emit("error", PASSWORD_ERROR, ctx);
  }

  // 4.把用户信息放入到ctx中
  ctx.user = users[0];
  await next();
}

async function verifyToken(ctx, next) {
  try {
    // 获取客户端带来的token
    const authorization = ctx.headers.authorization;
    const token = authorization.replace("Bearer ", "");

    // 解密获取信息
    const result = jwt.verify(token, PUBLICKEY, {
      algorithms: [`RS256`],
    });
    // console.log("result: ", result);
    // ctx.body = "用户列表页面";
    ctx.user = result;
    await next();
  } catch (err) {
    console.log("err: ", err);
    return ctx.app.emit("error", UNAUTHENTICATION, ctx);
  }
}

module.exports = {
  verifyLogin,
  verifyToken,
};
