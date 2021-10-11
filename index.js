const express = require('express');

const errorHandler = require('./middlewares/ErrorHandler');
const routes = require('./routes');
const runJobs = require('./jobs');

const port = process.env.API_PORT || 8080;

const app = express();

runJobs();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
