const Router = require("@koa/router");
const { create, update } = require("../controller/article_controller");
const { verifyToken } = require("../middleware/login_middleware");

const articleRouter = new Router({
  prefix: "/article",
});

articleRouter.post("/", verifyToken, create);
articleRouter.put("/", verifyToken, update);

module.exports = articleRouter;
