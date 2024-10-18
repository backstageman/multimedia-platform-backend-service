const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env);

module.exports = { SERVER_HOST, SERVER_PORT } = process.env;
