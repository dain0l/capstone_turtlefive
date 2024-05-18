const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/api", createProxyMiddleware({
    target: 'http://docturtle.site/',
    changeOrigin: true,
    pathRewrite: {'^/api' : ''}
  }));
};
