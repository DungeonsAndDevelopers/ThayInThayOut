const express = require('express');
const cartRouter = express.Router();
const { addItemToCart, getCartByAdventurerId, 
        updateCartQuantity, setCartInactive} = require('../db/cart');

cartRouter.get('/:username', async(req, res, next)=>{
  const output = {
    success: false,
    error: null,
    cart: null
  }
  const username = req.params.username;
  try{
    const cart = await getCartByAdventurerId(username);
    output.success = true;
    output.cart = cart;

  }catch(err){
    output.error = err;
  }
  res.send(output)
})
cartRouter.post('/addToCart/:adventurerId', async(req, res, next) => {
    const adventurerId = req.params.adventurerId;
    const output = {
        success : false,
        error : null,
        cart : null
    }
    try{
        const cart =  await addItemToCart(req.body.spellId, adventurerId);
        output.success = true;
        
        

    }catch(err){
        output.error = err;
    }

    res.send(output);
})

cartRouter.post('/quantityCart/:adventurerId', async(req, res, next) => {
  const adventurerId = req.params.adventurerId;
  const output = {
    success : false,
    error : null,
    cart : null
  }
  try{
    const cart = await updateCartQuantity(req.body.cartId, adventurerId);
    output.success = true;

  }catch(err){
    output.error = err;
  }
  res.send(output);
})

cartRouter.post('/inactiveCart/:adventurerId', async(req, res, next) =>{
  const adventurerId = req.params.adventurerId;
  const output = {
    success : false,
    error : null,
    cart : null
  }
  try{
    const cart = await setCartInactive(req.body.ca);
    output.success = true;

  }catch(err){
    output.error = err;
  }
  res.send(output);
})


module.exports = cartRouter;