const express =  require('express');
const apiRouter = express.Router();
const spellsRouter = require('./spells');
const registerRouter = require('./register');

apiRouter.use('/spells', spellsRouter);
apiRouter.use('/register', registerRouter);


module.exports = apiRouter;