const { encrypt } = require("../utils/encrypt");

const encryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = encrypt(password);
  await next();
};

module.exports = {
  encryptPassword,
};
