const { createHash } = require("node:crypto");

function encrypt(plainText) {
  const cipherText = createHash("md5").update(plainText).digest("hex");

  return cipherText;
}

module.exports = {
  encrypt,
};
