const client = require('./client');

const createSpellList = require('./spellAjax');

const {
  createNewSpell

} = require('.');
// const { default: createSpellList } = require('./spellAjax');


const dropTables = async() =>{
  console.log('DROPPING TABLES');
  await client.query(`
    DROP TABLE IF EXISTS adventurers;
    DROP TABLE IF EXISTS spells;
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
    CREATE TABLE spells( id SERIAL PRIMARY KEY,
                         name VARCHAR(25) NOT NULL,
                         school VARCHAR(15) NOT NULL,
                         base_level INTEGER NOT NULL,
                         casting_time VARCHAR(15),
                         description TEXT,
                         range VARCHAR(15),
                         is_active BOOLEAN NOT NULL);
    CREATE TABLE schools( id SERIAL PRIMARY KEY,
                          name VARCHAR(25))
  `)
  console.log('FINISHED BUILDING TABLES');
}

const createNewSpells = async() =>{
  console.log('CREATING SPELL LIST FROM API');
  const spellList = await createSpellList();
  console.log('FINISHED CREATING SPELL LIST FROM API')
  console.log('ADDING SPELL LIST TO SPELLSTABLE');
  for(let i = 0; i < spellList.length; i++){
    const currentSpell = spellList[i];    
    await createNewSpell(currentSpell.name, currentSpell.school, currentSpell.level, currentSpell.castingTime , currentSpell.description, currentSpell.range, true)
  }
  console.log('FINISHED ADDING SPELLS LIST TO SPELLS TABLE')

}

const seedDb = async() =>{
  console.log('CONNECTING TO DB');
  client.connect();
  console.log('FINISHED CONNECTING TO DB')
  await dropTables();
  await buildTables();
  await createNewSpells();
  console.log('DISCONNECTING FROM DB')
  client.end();
  console.log('CONNECTION TO DB CLOSED');
}

seedDb();