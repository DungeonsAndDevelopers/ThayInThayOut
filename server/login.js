const express = require('express');
const loginRouter = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { getAdventurerByUsernameAndPassword } = require('../db/adventurers');

// POST /api/login

loginRouter.post('/', async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const adventurerCheck = await getAdventurerByUsernameAndPassword(username, password);
        if(!adventurerCheck) {
            res.send({
                error: "UsernameOrPasswordIncorrect",
                message: "Username or password is incorrect"
            });
        } else {
            const token = jwt.sign({id: adventurerCheck.id, username: adventurerCheck.username}, JWT_SECRET);
            res.send({
                message: "Login successful",
                token: token,
                user: adventurerCheck
            });
        }
        
    } catch (error) {
        next (error);
    }
});

module.exports = loginRouter;

