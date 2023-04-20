const client = require('./client');

const createSpellList = require('./spellAjax');

const {
  createNewSpell,
} = require('.');
// const { default: createSpellList } = require('./spellAjax');


const dropTables = async() =>{
  console.log('DROPPING TABLES');
  await client.query(`
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS adventurers;
    DROP TABLE IF EXISTS spells;
    DROP TABLE IF EXISTS schools;
  `);
  console.log('FINISHED DROPPING TABLES');
}

const buildTables = async() => {
  console.log('BUILDING TABLES');
  await client.query(`
    CREATE TABLE adventurers( id SERIAL PRIMARY KEY,
                              first_name VARCHAR(100) NOT NULL,
                              last_name VARCHAR(100) NOT NULL,
                              email_address VARCHAR(100) NOT NULL,
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
    CREATE TABLE cart ( id SERIAL PRIMARY KEY,
                        "adventurerId" INTEGER REFERENCES adventurers(id) NOT NULL,
                        "spellId" INTEGER REFERENCES spells(id) NOT NULL,
                        quantity INTEGER DEFAULT 1,
                        "isActive" BOOLEAN DEFAULT true);
    CREATE TABLE schools( id SERIAL PRIMARY KEY,
                          name VARCHAR(25));
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

const createAdventurers = async () => {
  console.log('CREATING ADVENTURERS');
  await client.query(`
    INSERT INTO adventurers (first_name, last_name, email_address, username, password, is_active, is_admin)
    VALUES
      ('Edgin', 'Darvis', 'spoonybard@dnd.com', 'edgind', 'holgaisoutofmyleague', true, true),
      ('Holga', 'Kilgore', 'iwouldliketorage@dnd.com', 'holgak', 'hulksmash', true, false),
      ('Forge', 'Fitzwilliam', 'definitelynothughgrant@dnd.com', 'forgef', 'legitbusinessman', true, true);
  `);
  console.log('ADVENTURERS CREATED');
}

const createSchools = async () => {
  console.log('CREATING SCHOOLS');
  await client.query(`
    INSERT INTO schools (name)
    VALUES
    ('Abjuration'), ('Conjuration'), ('Divination'), ('Enchantment'),
    ('Evocation'), ('Illusion'), ('Necromancy'), ('Transmutation');
  `);
  console.log('SCHOOLS CREATED');
}

const createCarts = async () => {
  console.log('CREATING CARTS');
  const {rows: [edgin]} = await client.query(`
    SELECT id FROM adventurers 
    WHERE first_name = 'Edgin';
  `);
  const {rows: [holga]} = await client.query(`
    SELECT id FROM adventurers 
    WHERE first_name = 'Holga';
  `);
  const {rows: [acidArrow]} =  await client.query(`
    SELECT id FROM spells
    WHERE name = 'Acid Arrow';
  `);
  const {rows: [clone]} = await client.query(`
    SELECT id FROM spells
    WHERE name = 'Clone';
  `)
  await client.query(`
    INSERT INTO cart ("adventurerId", "spellId", quantity)
    VALUES
    (${edgin.id}, ${acidArrow.id}, 1),
    (${edgin.id}, ${clone.id}, 2),
    (${holga.id}, ${clone.id}, 1);
  `);
  console.log('CARTS CREATED');
}

const seedDb = async() =>{
  console.log('CONNECTING TO DB');
  client.connect();
  console.log('FINISHED CONNECTING TO DB')
  await dropTables();
  await buildTables();
  await createNewSpells();
  await createAdventurers();
  await createSchools();
  await createCarts();
  console.log('DISCONNECTING FROM DB')
  client.end();
  console.log('CONNECTION TO DB CLOSED');
}

seedDb();

//comment