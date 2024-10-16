const connection = require("../database");

class PermissionService {
  async verifyMomentPermission(id, user) {
    const userId = user.id;
    const statement = `SELECT * FROM moment WHERE user_id = ? AND id = ?;`;

    const [result] = await connection.execute(statement, [
      Number(userId),
      Number(id),
    ]);
    // console.log("result: >>>", result);
    return !!result.length;
  }
}

module.exports = new PermissionService();
