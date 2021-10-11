const router = require('express-async-router').AsyncRouter();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger.json');

const pairsController = require('./../controllers/pairs');

router.get('/pairs', pairsController.getSymbols);
router.post('/pairs', pairsController.createPairSymbol);

router.get('/average', pairsController.getAverage);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.all('*', (req, res) => {
  res.status(404).json({
    message: 'service not found',
  });
});

module.exports = router;
