module.exports = function (adminExpressApp) {
  adminExpressApp.get('/hello', (req, res) => {
    res.json({hello: 'admin'});
  });
};
