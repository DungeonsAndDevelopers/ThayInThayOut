const express = require('express');
const cartRouter = express.Router();
const { addItemToCart, getCartByAdventurerId, 
        updateCartQuantity, setCartInactive} = require('../db/cart');

cartRouter.get('/:adventurerId', async(req, res, next)=>{
  const output = {
    success: false,
    error: null,
    cart: null
  }
  const adventurerId = req.params.adventurerId;
  try{
    const cart = await getCartByAdventurerId(adventurerId);
    output.success = true;
    output.cart = cart;

  }catch(err){
    output.error = err;
  }
  res.send(output)
})


module.exports = cartRouter;