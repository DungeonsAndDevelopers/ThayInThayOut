import React, { useState, useEffect } from 'react' 
import fetchAdventurerCart from '../AjaxHelpers/Cart';
const Checkout = () => {

	const [ cart, setCart ] = useState([{name:'placeholder'}]);
	const [ total, setTotal ] = useState('');

	useEffect(()=>{
		fetchAdventurerCart(window.localStorage.getItem('username'), setCart)
	}, []);

	useEffect(()=>{
		const total = cart.reduce((accumulator, currentValue, index)=>{
			if(cart[index].is_active){
			return accumulator +(50 + (100 * cart[index].base_level))
			}
			else return accumulator + 0
		}, 0)
		setTotal(total);
	},[cart])
	console.log(total)
	return (
		<div className='p-2  mt-5 mb-5 mr-5 d-flex flex-column align-items-center'>
			<div className='d-flex'>
				<div className='mr-5 d-flex flex-column align-items-center'>
				<div className='mb-3 bg-darkish-cream rounded width-fit-content p-2 pb-1  scroll-bar'>
					<h3 className='text-center'>Your Cart:</h3>
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
				<div>
					<div className='mb-3 p-2 rounded d-flex flex-column bg-darkish-cream'>
						<div className='bg-ivory rounded p-2' >
						<h4>Shipping Info</h4>
						<form className='d-flex flex-column align-items-center'>
								<input className='px-2 mx-2 mb-1' placeholder='Dungeon Name'/>
								<input className='px-2 mx-2 mb-1' placeholder='Floor' />
								<input className='px-2 mx-2 mb-1' placeholder='Room'/>
							<div className=' d-flex flex-column align-items-center ' >
								<div className='border-bottom border-dark' >
								Need to Knows:
								</div>

								<div className='form-check d-flex align-items-center'>
									<label className='form-check-label text-danger' for="isSomeoneDyingCheck">
										Is Someone Dying?
									</label>
									<input className='form-check-input' type='checkbox' value="" id="isSomeoneDyingCheck" />	
								</div>
								<div className='form-check d-flex align-items-center'>
									<label className='form-check-label' for='isInCombatCheckbox'>
										Are you in combat?
									</label>
									<input className='form-check-input' type='checkbox' value="" id='isInCombatCheckbox' />
								</div>
								<div className='form-check d-flex align-items-center'>
									<label className='form-check-label' for='needMage'>
										Do you need mage?
									</label>
									<input className='form-check-input' type='checkbox' value="" id='isInCombatCheckbox' />
								</div>
							</div>
						</form>
						</div>
					</div>
				</div>
				<div className='d-flex flex-column  width-fit-content p-2 rounded bg-darkish-cream '>
					<div className='bg-ivory rounded p-2'>
					<h4>Billing Info</h4>
					<div className='form-check d-flex align-items-center'>
						<label className='form-check-label h6' for="bankSelector1" >
							Swords Coast Trader's Bank
						</label>
						<input className='form-check-input bg-ivory' type='radio' name="bankSelectorRadio" id="bankSelector1" />
					</div>
					<div className='form-check d-flex align-items-center'>
						<label className='form-check-label h6' for="bankSelector2" >
							Waterdeep Vault
						</label>
						<input className='form-check-input bg-ivory' type='radio' name="bankSelectorRadio" id="bankSelector2" />
					</div>
					<div className='form-check d-flex align-items-center'>
						<label className='form-check-label h6' for="bankSelector3" >
							Merchant's Credit Union
						</label>
						<input className='form-check-input bg-ivory' type='radio' name="bankSelectorRadio" id="bankSelector3" />
					</div>
					<div className='form-check d-flex align-items-center mb-3'>
						<label className='form-check-label h6' for="bankSelector4" >
							Part of Treasure
						</label>
						<input className='form-check-input bg-ivory ' type='radio' name="bankSelectorRadio" id="bankSelector4" />
					</div>
					<form className=' d-flex flex-column align-items-center'>
						<input className='px-1 mb-1' placeholder='account holder name' />
						<input className='px-1' placeholder='routing number' />
					</form>
					</div>
			</div>	
			</div>
				<div className='bg-darkish-cream width-fit-content p-2 rounded height-fit-content  fixed-div'>
				<div className='bg-ivory p-3 rounded d-flex flex-column align-items-center shadow-lg'>
					<div>Shipping: {total * 0.1}gp</div>
					<div>Tax: {total * 0.08}gp</div>
					<div className='d-flex align-items-center'>Total: 
					<h3 className='ml-2'>{total + (total * 0.08) + (total * 0.1)}gp</h3>
					</div>
					<button className="rounded px-2">Checkout</button>
				</div>
			</div>
			</div> 
		
			
		</div>
	)
	}

export default Checkout