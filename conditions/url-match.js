module.exports = {
  name: 'url-match',
  handler: function (req, conditionConfig) {
    return (conditionConfig.expected === req.url);
  }
};
