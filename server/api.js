const express =  require('express');
const apiRouter = express.Router();
const spellsRouter = require('./spells')

apiRouter.use('/spells', spellsRouter, async (req, res, next) => {

})


module.exports = apiRouter;