const express = require('express');
const adventurerRouter = express.Router();
const { createNewAdventurer, 
        getAdventurerByUsernameAndPassword,
        editAdventurer } = require('../db/adventurers');

adventurerRouter.get('/:username', async(req, res, next) => {
    const output = {
        success : false,
        error : null,
        adventurer : null
    }
    const username = req.params.username;
    try{
        const adventurer = await createNewAdventurer(adventurer);
        output.success = true;
        output.username = username;
        
    }catch(err){
        output.error = err;
    }
    res.send(output)
})
adventurerRouter.post('/:username/adventurer', async(req, res, next) => {
    const username = req.params.username;
    const output = {
        success : false,
        error : null,
        adventurer : null
    }
    try{
    const adventurer = await getAdventurerByUsernameAndPassword(adventurer)
    output.success = true;

    }catch(err){
        output.error = err;
    }
    res.send(output)
})
adventurerRouter.post('/:username/emailAddress', async(req, res, next) => {
    const username = req.params.username;
    const output = {
        success : false,
        error : null,
        adventurer : null
    }
    try{
        const adventurer = await editAdventurer(req.body.emailAddress)
        output.success = true;
    }catch(err){
        output.error = err;
    }
    res.send(output)
})
module.exports = adventurerRouter;