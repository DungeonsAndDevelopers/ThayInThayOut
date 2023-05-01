const client = require("./client")
const bcrypt = require('bcrypt');


const createNewAdventurer = async(firstName, lastName, emailAddress, username,
                             password, isActive, isAdmin) =>{
   
   try{
    const encryptedPassword = await bcrypt.hash(password, 3);

    const { rows: [ adventurer ] } = await client.query(`
      INSERT INTO adventurers(first_name, last_name, email_address, username, password, is_active, is_admin)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `,[firstName, lastName, emailAddress, username, encryptedPassword, isActive, isAdmin])
    delete adventurer.password;
    return adventurer
   }
   catch(err){
    throw err;
   }
}

const getAdventurerByUsernameAndPassword = async(username, password) =>{
  if(!username, !password) return false;
  try{
    const { rows: [ adventurer ] } = await client.query(`
    SELECT * FROM adventurers
    WHERE username = $1;
  `, [username]);
    if(!adventurer) return false;
    const matchPassword = await bcrypt.compare(password, adventurer.password);
    if(!matchPassword) return false;
    delete adventurer.password
    return adventurer
  }catch(err){
    throw err;
  }
}

const getAdventurerByUsername = async(username) => {
  try {
    const {rows: [adventurer] } = await client.query(`
      SELECT * FROM adventurers
      WHERE username = $1;
    `, [username]);
    return adventurer;
  } catch (error) {
    throw(error);
  }
}

const editAdventuerer = async(firstName, lastName, emailAddress) =>{
  try{
  const { rows: [adventurer] } = await client.query(`
    INSERT INTO adventurers (first_name, last_name, email_address)
    VALUES($1, $2, $3)
    RETURNING *;
  `, [firstName, lastName, emailAddress]);
  return adventurer
  }
  catch(err){
    throw err
  }
}

module.exports = {
  createNewAdventurer,
  getAdventurerByUsernameAndPassword,
  getAdventurerByUsername,
  editAdventuerer
}


// const test = async() =>{
//   client.connect()
//   console.log(await getAdventurerByUsername('edgind'));
//   client.end()
// }
// test()