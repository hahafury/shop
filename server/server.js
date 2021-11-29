const express = require('express');
const http = require('http');
const cors = require('cors');
require("dotenv").config({ path: "./.env" })
const routers = require('./src/routers');
const path = require('path');
const app = express();
const errorHandler = require('./src/helpers/error-handler');

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'src/public/images')));
app.use(routers);
app.use(errorHandler);

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log('-------------------------------------')
  console.log(`Server is running on port: ${process.env.PORT}`)
  console.log('-------------------------------------')
});