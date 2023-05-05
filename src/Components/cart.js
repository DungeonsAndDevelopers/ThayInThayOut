import React, { useState, useEffect } from 'react'; 
import fetchAdventurerCart from '../AjaxHelpers/Cart';
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {
	const [ cart, setCart ] = useState([]);
	const [ pictureFileNames, setPictureFileNames ] = useState(['/images/darkvision.png', '/images/disintegrate.png', '/images/featherfall.png']);


	const navigate = useNavigate();

	useEffect(()=>{
		fetchAdventurerCart(window.localStorage.getItem('username'), setCart);
	},[]);


	const navigateToCheckout = ()=>{
		navigate('/checkout');
	}



	return (
		<div className='d-flex justify-content-center'>
		{
		window.localStorage.getItem('advToken') ?
		<div id="cart" className='p-5 d-flex justify-content-center ml-5 w-75'>
			<div className='bg-darkish-cream rounded width-fit-content p-2 pb-1 mr-5 w-50'>
				{
					cart.map((item, index)=>{
						return(
							item.is_active ? 
							<div key={index} className='rounded d-flex justify-content-between  p-3 mb-2 bg-ivory shadow-lg '>
									<img className='bg-dark w-25' src={pictureFileNames[index]} />
								<div>
									<div className='mb-2'>{item.name}</div>
									<div className='mb-2'> quantity: {item.quantity}</div>
									<div className='mb-2' >price: {50 + (100 * item.base_level)}</div>
									<button className='px-2 rounded red-shadow'  >Remove</button>
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
					<button className="rounded px-2 red-shadow" onClick={navigateToCheckout} >Checkout</button>
				</div>
			</div>	
		</div> : <h2 style={{textAlign: "center", padding: '5%'}}>You must <Link to="/login">login</Link> to continue</h2>
					}
					</div>
	)
}


	export default Cart