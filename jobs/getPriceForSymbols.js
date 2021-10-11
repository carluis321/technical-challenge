const { getAllPairSymbols, saveSymbolInfo } = require('./../services/db');
const { getPairSymbolData } = require('./../services/binance');

const job = async () => {
  const symbols = await getAllPairSymbols();

  const getSymbolsDataPromises = symbols.map(({ id, name: symbol }) => {
    return new Promise(async (resolve, reject) => {
      const response = {
        id,
        symbol: symbol,
        data: await getPairSymbolData(symbol),
      };

      resolve(response);
    });
  });

  const pairSymbolData = await Promise.all(getSymbolsDataPromises);

  for (const pair of pairSymbolData) {
    const { id, data } = pair;
    const { mins, price } = data;

    await saveSymbolInfo(id, mins, price);
  }
};

module.exports = async () => {
  console.log('Job Started');
  try {
    await job();
    console.log('Job finished');
  } catch (error) {
    console.log('Job finished with error');
    console.log(error);
  }
};
