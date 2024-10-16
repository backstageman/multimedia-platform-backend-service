const { PRIVATEKEY } = require("../config/keys");
const jwt = require("jsonwebtoken");

class LoginController {
  signToken(ctx, next) {
    // 1. 获取用户信息
    const user = ctx.user;

    // 生成token
    const token = jwt.sign(
      { username: user.username, id: user.id },
      PRIVATEKEY,
      {
        expiresIn: 1000 * 60 * 60 * 24 * 7,
        algorithm: `RS256`,
      }
    );

    ctx.body = {
      code: 0,
      data: {
        token,
        id: user.id,
        username: user.name,
      },
    };
  }

  test(ctx, next) {
    ctx.body = "token认证成功";
  }
}
module.exports = new LoginController();
