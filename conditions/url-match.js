module.exports = {
  name: 'url-match',
  handler: function (req, conditionConfig) {
    return (conditionConfig.expected === req.url);
  },
  schema: {  // This is for Admin API to validate params
    expected: {
      title: 'expected',
      description: 'the expected url',
      type: 'string',
      required: false
    }
  }
};
