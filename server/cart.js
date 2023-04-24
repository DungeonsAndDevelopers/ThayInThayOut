const express = require('express');
// const path = require('path');
const cartRouter = express.Router();
const { getAllCard } = require('../db/cart');

cartRouter.get('/cart', async(req, res, next) => {
    const output = {
        success : false,
        error : null,
        cart : null
    }
    try{
        const cart = await getAllCard();
        output.success = true;
        output.cart = cart;

    }catch(err){
        output.error = err;
    }
    res.send(output)
})

module.exports = cartRouter;