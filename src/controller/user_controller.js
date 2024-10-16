const userService = require("../service/user_service");

class UserController {
  async create(ctx, next) {
    const userInfo = ctx.request.body;
    // 将信息插入到数据库中
    const result = await userService.create(userInfo);
    // 返回结果
    ctx.body = {
      success: true,
      result,
    };
  }
}

module.exports = new UserController();
