const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/api", createProxyMiddleware({
    target: 'https://docturtle.site:443/',
    changeOrigin: true,
    pathRewrite: {'^/api' : ''}
  }));
};
