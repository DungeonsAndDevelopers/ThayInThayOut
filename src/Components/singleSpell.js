import React, { useState, useEffect } from 'react';
import { fetchSingleSpell } from '../AjaxHelpers/Spells'; 


const SingleSpell = () => {

	const [ spell, setSpell ] = useState({});
	useEffect(()=>{
			fetchSingleSpell(1, setSpell)
	},[])
	console.log(spell)
	return (
		<div className='p-5 d-flex flex-column align-items-center'>
				<div className='d-flex justify-content-center m-5' >
					<img className='bg-ivory w-25 mr-5 rounded border border-dark' src="https://cdn.discordapp.com/attachments/1095734190189838457/1098304619668586506/Red_wizards_onslaught.webp" alt="Product Image"/>
					<div className='d-flex flex-column align-items-center ' >
						<div className='mb-2'>{spell.name}</div>
						<div className='d-flex align-items-center mb-2'>
							<div className='d-flex'>
								<div className='mr-1'>Price: </div>
								<h4 className='mr-3 font-weight-bold'>{(spell.base_level * 100) +50}gp</h4>
							</div>
							<button className='p-1 red-shadow rounded bg-ivory' >Add To Cart</button>
						</div>
						<div className='mb-2'>Spell Level Selector</div>
						<div className='d-flex flex-column align-items-center border border-dark p-2 rounded bg-ivory'> Quick Facts:
							<div>Casting Time: {spell.casting_time}</div>
							<div>Base Level: {spell.base_level}</div>
							<div>Range: {spell.range}</div>
							<div>School: {spell.school}</div>
						</div>
					</div>
				</div>
				<div className='border border-dark rounded p-3 w-50 bg-ivory'>
					<p className='font-weight-bold' >Description:</p>
					{
						spell.description ? 
						<p>{`${spell.description.substring(2, spell.description.length-2)}`}</p> 
						: null
					}	
				</div>
			</div>
	)
};


export default SingleSpell