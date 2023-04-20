const client = require('./client')

//Add item to cart
const addItemToCart = async (spellId, adventurerId, quantity = 1) => {
try{
    const {rows: [cart]} = await client.query(`
        INSERT INTO cart ("adventurerId", "spellId", quantity)
        VALUES ($1, $2, $3)
        RETURNING *;
    `, [adventurerId, spellId, quantity]);

    console.log(cart);
    return cart;
} catch(error) {
    throw error;
}
}

// const test = async() =>{
//   client.connect()
//   console.log(await addItemToCart(1, 1, 1));
//   client.end()
// }
// test()
//get cart by adventurer id

const getCartByAdventurerId = async (adventurerId) => {

}

//updated quantity in cart

const updateCartQuantity = async (cartId, spellId, quantity) => {

}

//set cart inactive

const setCartInactive = async (cartId) => {

}

module.exports = {
    addItemToCart,
    getCartByAdventurerId,
    updateCartQuantity,
    setCartInactive
}

