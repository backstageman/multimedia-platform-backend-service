const Router = require("@koa/router");
const userController = require("../controller/user_controller.js");
const { varifyUser } = require("../middleware/user_middleware.js");
const { encryptPassword } = require("../middleware/encrypt_password.js");

const userRouter = new Router({
  prefix: "/user",
});

userRouter.get("/list", (ctx, next) => {
  ctx.body = "用户列表页面，成功";
});

userRouter.post(
  "/register",
  varifyUser,
  encryptPassword,
  userController.create
);

userRouter.post("/login");
module.exports = userRouter;
