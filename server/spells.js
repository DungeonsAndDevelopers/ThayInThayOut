const express = require('express');
const spellsRouter = express.Router();
const { getAllSpells, getSingleSpellById, getSpellsBySchool } = require('../db/spells')

spellsRouter.get('/', async(req, res, next) =>{
  const output = {
    success: false,
    error: null, 
    spells: null
  }
  try{
    const spells = await getAllSpells();
    output.success = true;
    output.spells = spells;
  }
  catch(err){
    output.error = err;
  }
  res.send(output)
})


spellsRouter.get('/school/:schoolName', async(req, res, next) =>{
  const schoolName = req.params.schoolName;
  const output ={
    success: false,
    error: null,
    spells: null,
  }

  try{
    const spells = await getSpellsBySchool(schoolName);
    output.success = true;
    output.spells = spells
  }catch(err){
    output.error = err;
  }
  res.send(output);
})


spellsRouter.get('/:singleSpellsId', async(req, res, next) => {
  const singleSpellsId = req.params.singleSpellsId
  const output = {
    success : false, 
    error : null, 
    spell : null
  }
  try {
    const spell = await getSingleSpellById(singleSpellsId);
    output.spell = spell;
    output.success = true;

  }catch(err){
    output.error = err;
  }
  res.send(output)
})



module.exports = spellsRouter;