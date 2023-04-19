const { addItemToCart, getCartByAdventurerId, updateCartQuanity, setCartInactive } = require('../db/cart');

//addItemToCart
//expect new item to be added to cart
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

test('expect new item to be added to cart', () => {
    const spellId = 7;
    expect(addItemToCart(spellId)).toStrictEqual({
        id: 1,
        adventurerId: 1,
        spellId: 7,
        quantity: 1,
        isActive: true
    });
})


//getCartByAdventurerId

test('return cart based on adventurerId', () => {
    const adventurerId = 1;
    expect(getCartByAdventurerId(adventurerId).toStrictEqual({
        id: 1,
        adventurerId: adventurerId,
        spellId: 7,
        quantity: 1,
        isActive: true
    }));
})


//updateCartQuantity

test('return cart with updated spell quantity', () => {
    const spellId = 7;
    const newQuantity = 3;
    expect(updateCartQuanity(spellId, newQuantity).toStrictEqual({
        id: 1,
        adventurerId: 1,
        spellId: spellId,
        quantity: newQuantity,
        isActive: true
    }));
})

//setCartInactive

test('return cart with status inactive', () => {
    const cartId = 1;
    expect(setCartInactive(cartId).toStrictEqual({
        id: cartId,
        adventurerId: 1,
        spellId: 7,
        quantity: 1,
        isActive: false
    }))
})