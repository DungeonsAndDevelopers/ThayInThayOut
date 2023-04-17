const express = require('express');
const spellsRouter = express.Router();
const { getAllSpells } = require('../db/spells')

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

module.exports = spellsRouter;