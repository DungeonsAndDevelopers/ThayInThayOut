const express = require('express');
const schoolsRouter = express.Router();
const { getAllSchools } = require('../db/schools');


schoolsRouter.get('/', async (req, res, next) => {
    const schools = await getAllSchools();
    res.send(schools);
})

module.exports = schoolsRouter;

