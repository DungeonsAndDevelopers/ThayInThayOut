const client = require('./client');

const createNewSpell = async(name, school, baseLevel, castingTime, description,
                            range, isActive) =>{
  try{
  const { rows : [spell] } = await client.query(`
        INSERT INTO spells(name, school, base_level, casting_time, description, range, is_active)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
  `, [name,school, baseLevel, castingTime, description, range, isActive]);
  console.log(spell)
  return spell    
  }catch(err){
    throw err;
  }          
  
}

module.exports ={
  createNewSpell
}