const connection = require("../database");

class ArticleService {
  async create(title, content, aiticleId) {
    const statement = `INSERT INTO articles (title,content,author_id) VALUES (?,?,?);`;
    // 暂时写死，后续再更改。
    aiticleId = 1;
    const [result] = await connection.execute(statement, [
      title,
      content,
      aiticleId,
    ]);

    return result;
  }
}

module.exports = new ArticleService();
