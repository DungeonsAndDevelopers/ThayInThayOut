const express =  require('express');
const apiRouter = express.Router();
const spellsRouter = require('./spells');
const registerRouter = require('./register');
const loginRouter = require('./login');

apiRouter.use('/spells', spellsRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/login', loginRouter);


module.exports = apiRouter;