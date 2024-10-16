const ENCRYPT_KEY =
  "7f4I/pl(N#/6^S65#KW:;+pXA>{V+|qP;SxQ[?(jS_C6ur]UCb{uyPWj&{K(sZce";

// 随机生成字符串的方法
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
// const randomString = generateRandomString(64);
// console.log(randomString);

module.exports = {
  ENCRYPT_KEY,
};
