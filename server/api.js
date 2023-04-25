const express =  require('express');
const apiRouter = express.Router();
const spellsRouter = require('./spells');
const registerRouter = require('./register');
const loginRouter = require('./login');
const schoolsRouter = require('./schools');

apiRouter.use('/spells', spellsRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/login', loginRouter);
apiRouter.use('/schools/', schoolsRouter);



module.exports = apiRouter;