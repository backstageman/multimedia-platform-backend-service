const fs = require("node:fs");
const path = require("node:path");
// 文件上传中间件
const multer = require("@koa/multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, "../../public");

    // 检查 ./public 文件夹是否存在，不存在则创建
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log(`Folder "${uploadPath}" has been created.`);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const fileUpload = upload.array("file");

module.exports = {
  fileUpload,
};
