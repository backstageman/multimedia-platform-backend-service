const userService = require("../service/user_service");
const {
  UNAME_IS_ALREADY_EXISTS,
  UNAME_OR_PASSWORD_IS_REQUIRE,
} = require("../config/error");

async function varifyUser(ctx, next) {
  // 1.接收接口传过来的信息
  const userInfo = ctx.request.body;
  // console.log(ctx.request.body);

  // 2.数据校验
  // 2.1 是否为空
  const { username, password } = userInfo;
  if (!username || !password) {
    return ctx.app.emit("error", UNAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }

  // 2.2 判断用户名是否已经存在
  const users = await userService.findUserByName(username);
  if (users.length > 0) {
    return ctx.app.emit("error", UNAME_IS_ALREADY_EXISTS, ctx);
  }

  await next();
}

module.exports = {
  varifyUser,
};
