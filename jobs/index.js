const cron = require('node-cron');
const getPriceForSymbols = require('./getPriceForSymbols');

const runJobs = () => {
  cron.schedule('0 * * * *', async () => {
    await getPriceForSymbols();
  });
};

module.exports = runJobs;
