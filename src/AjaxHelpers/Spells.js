const axios = require('axios')

const fetchAllSpellsFE = async(setter) =>{
 try{
  const response = await fetch(`/api/spells/`);
  const results = await response.json();
  console.log(results)
  setter(results.spells);
 }catch(err){
  throw err
 }
}

export default fetchAllSpellsFE