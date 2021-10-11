const { saveSymbol, getAllPairSymbols } = require('../services/db');
const { getPairSymbolAverage } = require('./../services/pair');
const binanceService = require('../services/binance');

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createPairSymbol = async (req, res) => {
  const { symbol } = req.body;

  await binanceService.getPairSymbolData(symbol);

  await saveSymbol(symbol);

  res.sendStatus(201);
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getSymbols = async (req, res) => {
  const symbols = await getAllPairSymbols();

  const symbolsResponse = symbols.map(({ id, name }) => {
    return {
      id,
      symbol: name,
    };
  });

  const response = {
    results: symbolsResponse,
  };

  res.json(response);
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getAverage = async (req, res) => {
  const { symbol, lectures } = req.query;
  const average = await getPairSymbolAverage(symbol, lectures);

  res.json({
    average,
    numberOfLectures: lectures,
  });
};

module.exports = {
  getSymbols,
  createPairSymbol,
  getAverage,
};
