const express = require('express');
const registerRouter = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");

//POST /api/register

registerRouter.post('/', async (req, res, next) => {
    const { first_name, last_name, email_address, username, password, confirmPassword } = req.body;
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
            const adventurerCheck = await getAdventurersByUserName(username);
            
        } catch (error) {
            next(error);
        }
    }

})