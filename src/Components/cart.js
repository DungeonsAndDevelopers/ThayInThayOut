import React, { useState, useEffect } from 'react' 
import fetchAdventurerCart from '../AjaxHelpers/Cart';


const Cart = () => {
	const [ cart, setCart ] = useState([]);

	useEffect(()=>{
		fetchAdventurerCart(window.localStorage.getItem('username'), setCart);
	},[])

	return (
		<div id="cart" className='p-5 d-flex justify-content-center fixed-parent'>
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
			<div className='bg-darkish-cream width-fit-content p-2 rounded height-fit-content  fixed-div'>
				<div className='bg-ivory p-3 rounded d-flex flex-column align-items-center shadow-lg'>
					<div className='d-flex align-items-center'>Total: 
					<h3 className='ml-2'>
						{cart.reduce((accumulator, currentValue, index)=>{
						if(cart[index].is_active){
						return accumulator +(50 + (100 * cart[index].base_level))
						}
						else return accumulator + 0
					}, 0)
						}gp
						</h3>
					</div>
					<button className="rounded px-2">Checkout</button>
				</div>
			</div>	
		</div>
	)
}


	export default Cart