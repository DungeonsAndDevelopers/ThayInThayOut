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

const getCartByAdventurerId = async (adventurerId) => {
    try {
            const {rows: cart} = await client.query(`
                SELECT "adventurerId", spells.name, spells.base_level, "is_active" FROM cart
                JOIN spells 
                ON cart."spellId" = spells.id
                WHERE "adventurerId" = $1;
            `, [adventurerId]);
        return cart
    } catch (error) {
        throw error;
    }

}

// const test = async() =>{
//   client.connect()
//   console.log(await setCartInactive(1));
//   client.end()
// }
// test()
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
    try {
        const {rows: [cart] } = await client.query(`
            UPDATE cart
            SET "isActive" = false
            WHERE id = $1
            RETURNING *;
        `, [cartId]);
        return cart;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    addItemToCart,
    getCartByAdventurerId,
    updateCartQuantity,
    setCartInactive
}

