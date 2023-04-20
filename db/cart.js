const client = require('./client')

//Add item to cart
const addItemToCart = async (spellId, adventurerId, quantity = 1) => {
try{
    const {rows: [cart]} = await client.query(`
        INSERT INTO cart ("adventurerId", "spellId", quantity)
        VALUES ($1, $2, $3)
        RETURNING *;
    `, [adventurerId, spellId, quantity]);
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
    try {
            const {rows: cart} = await client.query(`
                SELECT * FROM cart
                WHERE "adventurerId" = $1;
            `, [adventurerId]);
        return cart;
    } catch (error) {
        throw error;
    }

}

//updated quantity in cart

const updateCartQuantity = async (cartId, quantity) => {
    try {
        const {rows: [cart] } = await client.query(`
            UPDATE cart
            SET quantity = $1
            WHERE id = $2
            RETURNING *;
        `, [quantity, cartId]);
        return cart;
    } catch (error) {
        throw error;
    }
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

