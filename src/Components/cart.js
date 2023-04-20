import React, { useState } from 'react' 

const cart = () => {
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
            <div id="checkoutButtonDiv">
                <button id="checkoutButton">CHECKOUT BUTTON</button>
            </div>
        </div>
    )
}