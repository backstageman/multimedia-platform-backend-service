const connection = require("../database");

class FileService {
  async create(filename, mimetype, size, articleId) {
    const statement = `INSERT INTO files (filename,mimetype,size,article_id) VALUES (?,?,?,?);`;
    let result = null;

    try {
      [result] = await connection.execute(statement, [
        filename,
        mimetype,
        size,
        articleId,
      ]);

      return result;
    } catch (err) {
      console.log("数据库操作失败：", err);
    } finally {
      await connection.releaseConnection();
    }
  }
}

module.exports = new FileService();
