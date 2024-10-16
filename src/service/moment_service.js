const connection = require("../database");

class MomentService {
  async queryOne(id) {
    const statement = `SELECT * FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [Number(id)]);

    return result;
  }

  async create(moment, id) {
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?);`;

    const [result] = await connection.execute(statement, [moment, id]);

    return result;
  }

  async queryAll() {
    const statement = `SELECT id,content FROM moment;`;

    const [result] = await connection.execute(statement);

    return result;
  }

  async updateOneById(id, content, user) {
    const statement = `UPDATE moment SET content = ? WHERE user_id = ? AND id = ?;`;

    const [result] = await connection.execute(statement, [
      content,
      Number(user.id),
      Number(id),
    ]);
    // console.log("result: >>> updateOneById", result);
    return result;
  }

  async deleteMomentById(id, user) {
    const statement = `DELETE FROM moment WHERE id = ? AND user_id = ?;`;

    const [result] = await connection.execute(statement, [
      Number(id),
      Number(user.id),
    ]);
    console.log("result: >>> deleteMomentById", result);
    return result;
  }
}

module.exports = new MomentService();
