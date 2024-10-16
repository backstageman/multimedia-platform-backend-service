const app = require("../app");
const {
  UNAME_OR_PASSWORD_IS_REQUIRE,
  UNAME_IS_ALREADY_EXISTS,
  USER_IS_UNREGISTER,
  PASSWORD_ERROR,
  UNAUTHENTICATION,
  SQL_EXECUTION_FAILED,
} = require("../config/error");

app.on("error", (error, ctx) => {
  let code = 0;
  let message = "";
  switch (error) {
    case UNAME_OR_PASSWORD_IS_REQUIRE:
      code = -1001;
      message = "用户名或密码不能为空.";
      break;
    case UNAME_IS_ALREADY_EXISTS:
      code = -1002;
      message = "用户名已存在.";
      break;
    case USER_IS_UNREGISTER:
      code = -1003;
      message = "用户未注册.";
      break;
    case PASSWORD_ERROR:
      code = -1004;
      message = "密码错误.";
      break;
    case UNAUTHENTICATION:
      code = -1005;
      message = "token无效.";
      break;
    case SQL_EXECUTION_FAILED:
      code = -1006;
      message = "执行sql出错.";
      break;
    case NO_PERMISSION:
      code = -1007;
      message = "没有权限.";
      break;
    default:
      code = -1000;
      message = "未知错误.";
      break;
  }

  ctx.body = {
    code,
    message,
  };
});
