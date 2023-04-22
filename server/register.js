const express = require('express');
const registerRouter = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const { getAdventurersByUsername, createNewAdventurer } = require('../db/adventurers');

//POST /api/register

registerRouter.post('/', async (req, res, next) => {
    const { firstName, lastName, emailAddress, username, password, confirmPassword } = req.body;
    if(password.length < 8) {
        res.send({
            error: "PasswordTooShort",
            message: "Passwords must be at least 8 characters long"
        });
    } else if (password !== confirmPassword) {
        res.send({
            error: "PasswordDoesNotMatch",
            message: "Password and Confirm Password do not match"
        });
    } else if (!username || !password || !confirmPassword) {
        res.send({
            error: "IncompleteForm",
            message: "A username, password, and password confirmation are required"
        });
    } else {
        try {
            const adventurerCheck = await getAdventurersByUsername(username);
            if(adventurerCheck) {
                res.send({
                    error: "UserAlreadyExists",
                    message: "An adventurer with that username already exists"
                });
            } else {
                const result = await createNewAdventurer(firstName, lastName, emailAddress, username, password, true, false);
                const token = jwt.sign({id: result.id, username: result.username}, JWT_SECRET);
                res.send({
                    message: "Registration successful",
                    token: token,
                    adventurer: result
                });
            }
            
        } catch (error) {
            next(error);
        }
    }

})

module.exports = registerRouter;

// curl http://localhost:3000/api/register -X POST -H "Content-Type: application/json" -d '{"firstName": "Elmister", "lastName": "TheWizard", "emailAddress": "elminster@dnd.com", "username": "ellie", "password": "letscastspells", "confirmPassword": "letscastspells"}'