const dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  // ...其他配置
  plugins: [
    new dotenv({
      path: path.resolve(__dirname, ".env"), // 指定 .env 文件的路径
    }),
  ],
};
