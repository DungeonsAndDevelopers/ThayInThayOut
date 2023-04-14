const client = require('./client');

const dropTables = async() =>{
  console.log('DROPPING TABLES');
  await client.query(`
    DROP TABLE IF EXISTS adventurers;
  `);
  console.log('FINISHED DROPPING TABLES');
}

const buildTables = async() => {
  console.log('BUILDING TABLES');
  await client.query(`
    CREATE TABLE adventurers( id SERIAL PRIMARY KEY,
                              first_name VARCHAR(15) NOT NULL,
                              last_name VARCHAR(15) NOT NULL,
                              email_address VARCHAR(20) NOT NULL,
                              username VARCHAR(20) UNIQUE NOT NULL,
                              password VARCHAR(110) NOT NULL,
                              is_active BOOLEAN NOT NULL,
                              is_admin BOOLEAN NOT NULL);
  `)
  console.log('FINISHED BUILDING TABLES');
}

const seedDb = async() =>{
  console.log('CONNECTING TO DB');
  client.connect();
  console.log('FINISHED CONNECTING TO DB')
  await dropTables();
  await buildTables();
  console.log('DISCONNECTING FROM DB')
  client.end();
  console.log('CONNECTION TO DB CLOSED');
}

seedDb();