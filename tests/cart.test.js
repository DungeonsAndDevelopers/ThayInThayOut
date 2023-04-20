const { addItemToCart, getCartByAdventurerId, updateCartQuantity, setCartInactive } = require('../db/cart');
const client = require('../db/client');

client.connect();

test('expect new item to be added to cart', async () => {
    const spellId = 7;
    const adventurerId = 1;
    const response = await addItemToCart(spellId, adventurerId);
    expect(response).toStrictEqual({
        id: 4,
        adventurerId: 1,
        spellId: 7,
        quantity: 1,
        isActive: true
    });
})


//getCartByAdventurerId

test('return cart based on adventurerId', async () => {
    const adventurerId = 1;
    const response = await getCartByAdventurerId(adventurerId);
    expect(response).toStrictEqual([{
        id: 1,
        adventurerId: adventurerId,
        spellId: 1,
        quantity: 1,
        isActive: true
    }, {
        id: 2,
        adventurerId: adventurerId,
        spellId: 19,
        quantity: 2,
        isActive: true
    }, {
        id: 4,
        adventurerId: adventurerId,
        spellId: 7,
        quantity: 1,
        isActive: true
    }]);
})


// updateCartQuantity

test('return cart with updated spell quantity', async () => {
    const newQuantity = 3;
    const cartId = 1;
    const response = await updateCartQuantity(cartId, newQuantity);
    expect(response).toStrictEqual({
        id: 1,
        adventurerId: 1,
        spellId: 1,
        quantity: newQuantity,
        isActive: true
    });
})

// //setCartInactive

// test('return cart with status inactive', () => {
//     const cartId = 1;
//     expect(setCartInactive(cartId).toStrictEqual({
//         id: cartId,
//         adventurerId: 1,
//         spellId: 7,
//         quantity: 1,
//         isActive: false
//     }));
// })

// client.end();