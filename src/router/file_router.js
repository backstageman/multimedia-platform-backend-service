const Router = require("@koa/router");
const { verifyToken } = require("../middleware/login_middleware");
const { fileUpload } = require("../middleware/file_middleware");
const { create } = require("../controller/file_controller");

const fileRouter = new Router({
  prefix: "/file",
});

fileRouter.post("/", verifyToken, fileUpload, create);

module.exports = fileRouter;
