const Router = require("@koa/router");
const {
  queryOne,
  queryAll,
  create,
  update,
  remote,
} = require("../controller/moment_controller");
const { verifyToken } = require("../middleware/login_middleware");
const { verifyPermission } = require("../middleware/permission_middleware");

const momentRouter = new Router({
  prefix: "/moments",
});

momentRouter.get("/", queryAll);
momentRouter.get("/:id", queryOne);
momentRouter.post("/", verifyToken, /**可以校验内容 */ create);
momentRouter.put("/", verifyToken, verifyPermission, update);
momentRouter.delete("/", verifyToken, verifyPermission, remote);
// momentRouter.update("/");

module.exports = momentRouter;
