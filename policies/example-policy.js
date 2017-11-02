module.exports = {
  name: 'example',
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log('executing policy example with params', actionParams)
    }
  },
  schema: { // This is for Admin API to validate params
    type: 'object',
    properties: {
      url: {
        title: 'url',
        description: 'the url to initialize',
        type: 'string',
        required: false
      }
    }
  }
}
