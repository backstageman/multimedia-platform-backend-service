const { create } = require("../service/article_service");
class ArticleController {
  async create(ctx, next) {
    const article = ctx.request.body;

    const { title, content } = article;
    const { id } = ctx.user;

    const result = await create(title, content, id);

    ctx.body = {
      code: 0,
      success: "创建成功",
      result,
    };
  }

  async update(ctx, next) {
    const articleId = ctx.request.body;
  }
}

module.exports = new ArticleController();
