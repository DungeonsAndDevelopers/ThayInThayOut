

const fetchAllSpellsFE = async(setter) =>{
 try{
  const response = await fetch(`/api/spells/`);
  const results = await response.json();
  setter(results.spells);
 }catch(err){
  throw err
 }
}

export const fetchSingleSpell = async(spellId, setter) =>{
  try{
    const response = await fetch(`api/spells/${spellId}`)
    const results = await response.json();
    setter(results.spell);
  }catch(err){
    throw(err)
  }
}

export const fetchAllSpellsBySchool = async(schoolName, setter) =>{
  try{
    const response = await fetch(`api/spells/school/${schoolName}`);
    const results = await response.json();
    setter(results.spells);
  }catch(err){
    throw(err);
  }
}

export default fetchAllSpellsFE