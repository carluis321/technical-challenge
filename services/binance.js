const { create } = require('axios');

const binanceAPI = create({
  baseURL: 'https://api.binance.com/api/v3/',
  'Content-Type': 'application/json',
});

/**
 *
 * @typedef pairSymbolData
 * @type {Object}
 * @property {number} mins
 * @property {string} price
 */

/**
 *
 * @param {string} pairSymbol
 * @returns {Promise<pairSymbolData>}
 */
const getPairSymbolData = async (pairSymbol) => {
  const { data } = await binanceAPI.get('/avgPrice', {
    params: {
      symbol: pairSymbol,
    },
  });

  return data;
};

module.exports = {
  getPairSymbolData,
};
