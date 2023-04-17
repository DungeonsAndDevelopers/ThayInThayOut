const client = require('./client');

const createNewSpell = async(name, school, baseLevel, castingTime, description,
                            range, isActive) =>{
  try{
  const { rows : [spell] } = await client.query(`
        INSERT INTO spells(name, school, base_level, casting_time, description, range, is_active)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
  `, [name,school, baseLevel, castingTime, description, range, isActive]);
  return spell    
  }catch(err){
    throw err;
  }          
  
}


const getAllSpells = async() =>{
  try{
  const { rows: spells } = await client.query(`
    SELECT * FROM spells;
  `)
  console.log(spells)
  return spells
  }catch(err){
    throw err;
  }
};

const getSingleSpellById = async(spellId) =>{
  try{
    const { rows: [spell] } = await client.query(`
      SELECT * FROM spells
      WHERE id = $1;
    `, [spellId]);
    return spell;
  }catch(err){
    throw err
  }
}

module.exports ={
  createNewSpell,
  getAllSpells,
  getSingleSpellById
}

// const test = async() =>{
//   client.connect()
//   console.log(await getSingleSpellById(1));
//   client.end()
// }
// test()