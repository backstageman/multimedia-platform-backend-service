const { create } = require("../service/file_service");

class FileController {
  async create(ctx, next) {
    const files = ctx.request.files;
    // 需要articleid
    const articleId = 1;
    // const { id } = ctx.user;
    // let data = [];

    /**
     * 同步执行
     */
    /* for (let file of files) {
      const { filename, size, mimetype } = file;
      const result = await create(filename, mimetype, size, id);
      data.push(result);
    } */

    /**
     * 并发处理
     */
    const data = await Promise.all(
      files.map(async (file) => {
        const { filename, size, mimetype } = file;
        const result = await create(filename, mimetype, size, articleId);
        return result;
      })
    );

    ctx.body = {
      code: 0,
      message: "文件上传成功",
      data,
    };
  }
}

module.exports = new FileController();
