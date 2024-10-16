const {
  queryOne,
  queryAll,
  create,
  updateOneById,
  deleteMomentById,
} = require("../service/moment_service");
const { SQL_EXECUTION_FAILED } = require("../config/error");

class MomentController {
  async queryOne(ctx, next) {
    const { id } = ctx.params;
    let result = null;
    try {
      result = await queryOne(id);
      ctx.body = {
        success: true,
        result,
      };
    } catch (error) {
      //   console.log("error:", error);
      ctx.status = 500;
      ctx.app.emit("error", SQL_EXECUTION_FAILED, ctx);
    } finally {
      // 此处应该记录日志
    }
  }

  async queryAll(ctx, next) {
    let result = null;
    try {
      result = await queryAll();
      ctx.body = {
        success: true,
        result,
      };
    } catch (error) {
      console.log("error:", error);
      ctx.status = 500;
      ctx.app.emit("error", SQL_EXECUTION_FAILED, ctx);
    } finally {
      // 此处应该记录日志
    }
  }

  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { id } = ctx.user;

    let result = null;
    try {
      result = await create(content, id);
      ctx.status = 201;
      ctx.body = {
        success: true,
        result,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.app.emit("error", SQL_EXECUTION_FAILED, ctx);
    } finally {
      // 此处应该记录日志
    }
  }

  async update(ctx, next) {
    const user = ctx.user;
    const { id, content } = ctx.request.body;
    // console.log(ctx.user, id, content, " <><><>");
    let result = null;
    try {
      result = await updateOneById(id, content, user);
      ctx.body = {
        success: true,
        data: result,
      };
    } catch (error) {
      //   console.log("error:", error);
      ctx.status = 500;
      ctx.app.emit("error", SQL_EXECUTION_FAILED, ctx);
    } finally {
      // 此处应该记录日志
    }
  }

  async remote(ctx, next) {
    const user = ctx.user;
    const { id } = ctx.request.body;
    let result = null;
    try {
      result = await deleteMomentById(id, user);
      ctx.body = {
        success: true,
        data: result,
      };
    } catch (error) {
      //   console.log("error:", error);
      ctx.status = 500;
      ctx.app.emit("error", SQL_EXECUTION_FAILED, ctx);
    } finally {
      // 此处应该记录日志
    }
  }
}

module.exports = new MomentController();
