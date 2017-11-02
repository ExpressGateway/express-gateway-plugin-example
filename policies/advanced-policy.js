module.exports = pluginContext => {
  return {
    name: 'exampleWithContext',
    policy: (actionParams) => {
      return (req, res, next) => {
        console.log('executing policy exampleWithContext with params and context', actionParams, pluginContext)
      }
    },
    schema: { // This is for Admin API to ask about params
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
}
