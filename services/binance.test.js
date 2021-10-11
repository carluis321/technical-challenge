const binanceService = require('./binance');

describe('Binance API', () => {
  test('Should successfully get existent pair symbol', async () => {
    const symbol = 'BTCUSDT';

    const pairSymbolData = await binanceService.getPairSymbolData(symbol);

    expect(pairSymbolData).toEqual(
      expect.objectContaining({
        mins: expect.any(Number),
        price: expect.any(String),
      })
    );
  });
});
