// Dev ONLY

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      //접속하려는 서버의 루트 URL
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
