const client = require("./client")


const createNewAdventurer = async(firstName, lastName, emailAddress, username,
                             password, isActive, isAdmin) =>{
   
   try{
    const { rows: [ adventurer ] } = await client.query(`
      INSERT INTO adventurers(first_name, last_name, email_address, username, password, is_active, is_admin)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `,[firstName, lastName, emailAddress, username, password, isActive, isAdmin])
    delete adventurer.password;
    return adventurer
   }
   catch(err){
    throw err;
   }
}

// const test = async() =>{
//   client.connect()
//   console.log(await createNewAdventurer('test', 'test', 'teest@test', 'test', 'test', true, false));
//   client.end()
// }
// test()