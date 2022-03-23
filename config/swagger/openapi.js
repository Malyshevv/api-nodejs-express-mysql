const routes = require('../../app/routes')

const swagger = {
  'openapi': '3.0.0',
  'info': {
    'title': 'Express API',
    'version': '1.0.0',
    'description': 'The REST API'
  },
  'servers': [
    {
      'url': 'http://localhost:8080',
      'description': 'Api Server - Local'
    }
  ],
  'components': {
    'securitySchemes': {
      'bearerAuth': {
        'type': 'http',
        'scheme': 'bearer',
        'bearerFormat': 'JWT'
      }
    },
  },
  'paths': {}
}

module.exports = {
  swDocument: swagger
}
