const { Client } = require('pg');
const client = new  Client(process.env.DATABASE_URL || 'postgres://localhost:5432/thay_in_thay_out-dev');

module.exports = client;