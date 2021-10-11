const { Client } = require('pg');
const binanceService = require('./binance');

const { PG_DB, PG_USER, PG_PASS, PG_PORT, PG_HOST } = process.env;

const client = new Client({
  database: PG_DB,
  user: PG_USER,
  password: PG_PASS,
  port: PG_PORT,
  host: PG_HOST,
});

(async () => {
  if (process.env.NODE_ENV !== 'test') {
    await client.connect();
  }
})();

/**
 *
 * @param {String} symbol
 */
const saveSymbol = async (symbol) => {
  const pairId = await client.query('INSERT INTO pairs (name) VALUES ($1) RETURNING id', [symbol]);

  return pairId.rows[0].id;
};

/**
 *
 * @param {Number} pairId
 * @param {Number} mins
 * @param {String} price
 */
const saveSymbolInfo = async (pairId, mins, price) => {
  await client.query('INSERT INTO pair_historial_info (pair_id, mins, price) VALUES ($1, $2, $3)', [
    pairId,
    mins,
    price,
  ]);
};

/**
 *
 * @param {String} symbol
 */
const savePairSymbol = async (symbol) => {
  const { mins, price } = await binanceService.getPairSymbolData(symbol);

  const pairId = await saveSymbol(symbol);

  await saveSymbolInfo(pairId, mins, price);
};

/**
 *
 * @param {String} symbol
 * @param {Number} lectures
 * @returns
 */
const getPairSymbolLectures = async (symbol, lectures) => {
  const { rows: pairSymbolData } = await client.query(
    'SELECT phi.* FROM pair_historial_info phi, pairs p where phi.pair_id = p.id AND p.name = $1 ORDER BY created_at DESC LIMIT $2',
    [symbol, lectures]
  );

  return pairSymbolData;
};

/**
 *
 * @returns {Promise<Array[{id: Number, name: String, created_at: Date}]>}
 */
const getAllPairSymbols = async () => {
  const { rows } = await client.query('SELECT * FROM pairs');

  return rows;
};

module.exports = {
  saveSymbol,
  saveSymbolInfo,
  savePairSymbol,
  getPairSymbolLectures,
  getAllPairSymbols,
};
