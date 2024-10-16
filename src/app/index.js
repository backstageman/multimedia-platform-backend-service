const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { autoLoadRoutes } = require("../router/auto_load_routes");

const app = new Koa();

app.use(bodyParser());
// 自动加载路由
autoLoadRoutes(app);

module.exports = app;
