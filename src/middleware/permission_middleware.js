const { NO_PERMISSION, SQL_EXECUTION_FAILED } = require("../config/error");
const { verifyMomentPermission } = require("../service/permission_service");

const verifyPermission = async (ctx, next) => {
  const { id } = ctx.request.body;
  const user = ctx.user;
  try {
    const result = await verifyMomentPermission(id, user);
    if (result) {
      await next();
    } else {
      return ctx.app.emit("error", NO_PERMISSION, ctx);
    }
  } catch (error) {
    return ctx.app.emit("error", SQL_EXECUTION_FAILED, ctx);
  } finally {
    // 此处应该记录日志
  }
};

module.exports = {
  verifyPermission,
};
