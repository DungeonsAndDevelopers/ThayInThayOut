import React, { useState } from 'react' 
import { checkout } from '../../server/spells'

const Checkout = () => {
    return (
        <div>
            <h2>Checkout</h2>
            <h1>Review Cart</h1>
            <ol>
                <li>
                    Cart Item, Price 
                </li>
                <li>
                    Cart Item, Price
                </li>
                <li>
                    Cart Item, Price
                </li>
                <li>
                    Cart Item, Price
                </li>
                <li>
                    Cart Item, Price
                </li>
            </ol>

            <div>
                 <h3>Shipping Options</h3>
                 <ul>
                    <li>
                        Option
                        <input type="checkbox"></input>
                    </li>
                    <li>
                        Option
                        <input type="checkbox"></input>
                    </li>
                 </ul>
            </div>

            <form id="shippingForm">
                 Shipping Address

                 <input class="addressInput" placeholder="address"></input>
                 <input class="cityInput" placeholder='city'></input>
                 <input class="stateInput" placeholder='state'></input>
                 <input class="zipCodeInput" placeholder='zip code'></input>
                 <input class="countryInput" placeholder='country'></input>
            </form>

            <form id="billingForm">
                 Billing Address
                 <input class="addressInput" placeholder="address"></input>
                 <input class="cityInput" placeholder='city'></input>
                 <input class="stateInput" placeholder='state'></input>
                 <input class="zipCodeInput" placeholder='zip code'></input>
                 <input class="countryInput" placeholder='country'></input>
            </form>
        
            <div> Payment Method </div>
            <span>
                {/* this span should float to the
                 right of the page and follow the 
                 user as they scroll down the page */}
                Total + Shipping Displayed HERE
                <button id="checkoutButton">Checkout</button>
             </span>
        </div>
    )
}

export default Checkout