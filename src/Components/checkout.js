import React, { useState, useEffect } from 'react' 
import fetchAdventurerCart from '../AjaxHelpers/Cart';
const Checkout = () => {

	const [ cart, setCart ] = useState([{name:'placeholder'}]);

	useEffect(()=>{
		fetchAdventurerCart(window.localStorage.getItem('username'), setCart)
	}, []);

	console.log(cart)

	return (
		<div>

			<button data-toggle='collapse' data-target="#cart"> 
				<div> 
					<div className='border-bottom border-dark'>Your cart</div>
					{cart[0].name}
					<div>Click to see more</div>
					
				</div>
				</button>
			<div id='cart' className='collapse'>
				<div className='bg-darkish-cream rounded width-fit-content p-2 pb-1 mr-5 '>
					{
						cart.map((item, index)=>{
							return(
								item.is_active ? 
								<div key={index} className='rounded d-flex justify-content-between  p-3 mb-2 bg-ivory shadow-lg'>
									<div className='mr-5'>Image Place Holder</div>
									<div>
										<div className='mb-2'>{item.name}</div>
										<div className='mb-2'> quanity: {item.quanity}</div>
										<div className='mb-2' >price: {50 + (100 * item.base_level)}</div>
										<button className='px-2 rounded'>Remove</button>
									</div>
								</div>: null
							)
						})
					}
				</div>
			</div>
			
				
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

			<input className="addressInput" placeholder="address"></input>
			<input className="cityInput" placeholder='city'></input>
			<input className="stateInput" placeholder='state'></input>
			<input className="zipCodeInput" placeholder='zip code'></input>
			<input className="countryInput" placeholder='country'></input>
		</form>

		<form id="billingForm">
			Billing Address
			<input className="addressInput" placeholder="address"></input>
			<input className="cityInput" placeholder='city'></input>
			<input className="stateInput" placeholder='state'></input>
			<input className="zipCodeInput" placeholder='zip code'></input>
			<input className="countryInput" placeholder='country'></input>
		</form>

		<div> Payment Method </div>
			<span>
				this span should float to the
					right of the page and follow the 
					user as they scroll down the page
				Total + Shipping Displayed HERE
				<button id="checkoutButton">Checkout</button>
			</span>
		</div>
	)
	}

export default Checkout