module.exports = function (gatewayExpressApp) {
  gatewayExpressApp.get('/hello', (req, res) => {
    res.json({hello: 'Express-Gateway'});
  });
};
