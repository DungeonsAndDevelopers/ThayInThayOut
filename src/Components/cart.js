import React, { useState } from 'react' 

const Cart = () => {
    return (
        <div id="cart">
            <ol class ="cartList">
                <li>
                    I AM A CART ITEM
                </li>
                <li>
                    I AM A CART ITEM
                </li>
                <li>
                    I AM A CART ITEM 
                </li>
            </ol>
            <span>Cart Subtotal goes HERE</span>
            <div id="checkoutButtonDiv">
                <button id="checkoutButton">CHECKOUT BUTTON</button>
            </div>
        </div>
    )
}


export default Cart