const { getPairSymbolLectures } = require('./db');

/**
 *
 * @param {Array} pairSymbolData
 * @returns {Number}
 */
const getAverage = (pairSymbolData, lectures) => {
  const totalPrice = pairSymbolData.reduce((acc, pairData) => acc + pairData.price, 0);

  const average = totalPrice / lectures;

  return average;
};

/**
 *
 * @param {String} symbol
 * @param {Number} lectures
 * @returns {Promise<Number>}
 */
const getPairSymbolAverage = async (symbol, lectures) => {
  const pairSymbolData = await getPairSymbolLectures(symbol, lectures);

  const average = getAverage(pairSymbolData, lectures);

  return average;
};

module.exports = {
  getPairSymbolAverage,
  getAverage,
};
