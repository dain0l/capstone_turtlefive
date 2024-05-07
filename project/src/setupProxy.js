const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/login",
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
module.exports = function(app) {
    app.use(
      "/findID",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/findPassword",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/setPassword",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/logout",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/inquery",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/percentage",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/webcam/**",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };
  module.exports = function(app) {
    app.use(
      "/logout",
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  };

