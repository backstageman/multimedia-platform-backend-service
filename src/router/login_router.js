const Router = require("@koa/router");
const { verifyLogin, verifyToken } = require("../middleware/login_middleware");
const { signToken, test } = require("../controller/login_controller");

const loginRouter = new Router({
  prefix: "/login",
});

loginRouter.post("/", verifyLogin, signToken);
loginRouter.get("/test", verifyToken, test);

module.exports = loginRouter;
