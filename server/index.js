const express = require('express');
const server = express();
const morgan = require('morgan');
const path = require('path');
const apiRouter = require('./api');

server.use(morgan('dev'));
server.use('/api', apiRouter)

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>{
  console.log(`LISTENING ON PORT ${PORT}`)
})