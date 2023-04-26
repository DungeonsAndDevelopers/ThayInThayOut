	import React, { useState, useEffect } from 'react' 



const Cart = () => {
	const [ cart, setCart ] = useState([]);

	const dummyCart = [
		{
				id: 1,
				adventurerId: 1,
				name: 'Spell1',
				quanity: 1,
				cost: 100,
				baseLevel: 0,
				isActive: true
		},
		{
				id: 2,
				adventurerId: 1,
				name: 'Spell2',
				quanity: 1,
				cost: 100,
				baseLevel: 1,
				isActive: true
		},
		{
				id: 3,
				adventurerId: 1,
				name: 'Spell3',
				quanity: 1,
				cost: 100,
				baseLevel: 2,
				isActive: false
		},
		{
				id: 4,
				adventurerId: 1,
				name: 'Spell4',
				quanity: 1,
				cost: 100,
				baseLevel: 3,
				isActive: true
		},
		{
				id: 5,
				adventurerId: 1,
				name: 'Spell5',
				quanity: 1,
				cost: 100,
				baseLevel: 4,
				isActive: true
		}
	]

	useEffect(()=>{
		setCart(dummyCart);
	},[])

	return (
		<div id="cart" className='p-5 d-flex justify-content-center fixed-parent'>
			<div className='bg-darkish-cream rounded width-fit-content p-2 pb-1 mr-5 '>
				{
					cart.map((item, index)=>{
						return(
							item.isActive ? 
							<div key={index} className='rounded d-flex justify-content-between  p-3 mb-2 bg-ivory shadow-lg'>
								<div className='mr-5'>Image Place Holder</div>
								<div>
									<div className='mb-2'>{item.name}</div>
									<div className='mb-2'> quanity: {item.quanity}</div>
									<div className='mb-2' >price: {50 + (item.cost * item.baseLevel)}</div>
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
						if(cart[index].isActive){
						return accumulator +(50 + (cart[index].cost * cart[index].baseLevel))
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