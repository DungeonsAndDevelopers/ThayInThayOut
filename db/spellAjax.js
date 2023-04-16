const axios = require('axios')

const fetchAllSpells =  async() =>{
  const response = await axios.get(`https://www.dnd5eapi.co/api/spells`)
  return response.data.results
}


const createSpellList = async() => {
  const spells = await fetchAllSpells()
  const spellList = [];
  for(let i = 0; i <spells.length; i++){

  const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${spells[i].index}`);
  if(response.data.concentration === false && response.data.range !== "Self"){ 
    spellList.push({
      name: response.data.name,
      school: response.data.school.name,
      level: response.data.level,
      castingTime: response.data.casting_time,
      description: response.data.desc,
      range: response.data.range
    })
  }
}
return spellList
} 
module.exports = createSpellList;