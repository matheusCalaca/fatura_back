const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
      // Like the one described here: https://swagger.io/specification/#infoObject
      info: {
        title: 'Matheus Calaça fatura - API ',
        version: '1.0.0',
        description: 'api do teste da fatura - documentação se encontra somente os end points',
      },
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: [
        './src/routes/userRoute.js',
        './src/routes/faturaRoute.js'

  ],
  };

const specs = swaggerJsdoc(options);

module.exports = (app) => {app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));}