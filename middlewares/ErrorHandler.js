const axios = require('axios');

module.exports = (err, req, res, next) => {
  console.log(err);
  if (axios.isAxiosError(err)) {
    //do something with axios error

    const {
      response: { data, status },
    } = err;

    res.status(status).json(data);
    return;
  }

  res.status(500).json({
    message: 'something went wrong',
  });
};
