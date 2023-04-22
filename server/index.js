const express = require('express');
const client = require('../db/client')
const server = express();
const morgan = require('morgan');
const path = require('path');
const apiRouter = require('./api');

server.use(express.json());

server.use('/dist', express.static(path.join(__dirname, "../dist")));
server.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../public', 'index.html')))

server.use(morgan('dev'));
server.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>{
  client.connect()
  console.log(`LISTENING ON PORT ${PORT}`)
})