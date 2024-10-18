const path = require("node:path");
const app = require("./app");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle_error");
const connection = require("./database");
const serve = require("koa-static");
const mount = require("koa-mount");

const staticPath = path.resolve(__dirname, "../public");
app.use(mount("/static", serve(staticPath)));

app.listen(SERVER_PORT, () => {
  console.log("server start");
});

const gracefulShutdown = async () => {
  console.log("Shutting down gracefully....");

  // 关闭koa服务
  app.close(async () => {
    console.log("Koa server closed");

    // 关闭连接池
    await connection.end();
    console.log("Database connection poo closed");

    process.exit(0);
  });
};

// 捕获 `SIGINT`（例如 Ctrl + C）信号
process.on("SIGINT", gracefulShutdown);
// 捕获 `SIGTERM`（例如 kill 命令）信号
process.on("SIGTERM", gracefulShutdown);
