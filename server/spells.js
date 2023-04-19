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

spellsRouter.get('/api/spells/singleSpell', singleSpellRoute, async(req, res, next) => {
  res.send({
    message: "this route is healthy"
  })
})

module.exports = spellsRouter;