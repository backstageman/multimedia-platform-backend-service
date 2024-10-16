const fs = require("node:fs");
const path = require("node:path");

const PUBLICKEY = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));
const PRIVATEKEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
);

module.exports = {
  PUBLICKEY,
  PRIVATEKEY,
};
