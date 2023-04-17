const express =  require('express');
const apiRouter = express.Router();
const spellsRouter = require('./spells')

apiRouter.use('/spells', spellsRouter);


module.exports = apiRouter;