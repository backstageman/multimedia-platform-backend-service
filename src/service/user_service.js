const connection = require("../database");

class UserService {
  async create(user) {
    const statement = "INSERT INTO `user` (name,password) VALUES (?,?);";

    const [result] = await connection.execute(statement, [
      user.username,
      user.password,
    ]);

    console.log("保存到数据库中", result);
    return result;
  }

  async findUserByName(username) {
    const statement = "SELECT * FROM `user` WHERE name = ?;";

    const [result] = await connection.execute(statement, [username]);
    console.log("查询用户信息", result);
    return result;
  }
}

module.exports = new UserService();
