const mysql = require("mysql2");
const { host, port, database, user, password } = require("../config/db");

const connectPool = mysql.createPool({
  host,
  port,
  database,
  user,
  password,
});

connectPool.getConnection((err, connection) => {
  if (err) {
    console.log("获取数据库连接", err);
    return;
  }

  connection.connect((error) => {
    if (err) {
      console.log("连接数据库失败：", error);
    } else {
      console.log("连接数据库成功✔");
    }
  });
});

const connection = connectPool.promise();

module.exports = connection;
