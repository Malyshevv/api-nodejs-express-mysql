const routes = require('../../app/routes')

const swagger = {
  'openapi': '3.0.0',
  'info': {
    'title': 'Express API HVE',
    'version': '1.0.0',
    'description': 'The REST API for HVE'
  },
  'servers': [
    {
      'url': 'http://localhost:8080', 
      'description': 'Api Server - Local'
    },
    {
      'url': 'http://api.hve.ru',
      'description': 'Api Server - Remote'
    },
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