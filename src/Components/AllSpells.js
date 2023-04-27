import React, { useState, useEffect } from 'react';
import fetchAllSpellsFE from '../AjaxHelpers/Spells';
import { useNavigate } from 'react-router';

const AllSpells = () =>{

  const [ allSpells, setAllSpells ] = useState([]);
  const navigation = useNavigate();

  const goToSingleSpell = (spellId) => {
    navigation(`/spells/${spellId}`)
  }
  useEffect(()=>{
    fetchAllSpellsFE(setAllSpells);
  },[])
  console.log(allSpells)
  return(
    <div id="all-spells" className='p-2 d-flex justify-content-center'>
      <div className='px-5'>
        <div>Option</div>
        <div>Option</div>
        <div>Option</div>
        <div>Option</div>
        <div>Option</div>
        <div>Option</div>
        <div>Option</div>
        <div>Option</div>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          allSpells.map((spell, index) =>{
            return(
              <div key={index} className=' product-card d-flex flex-column align-items-center p-2 m-1 rounded pointer' onClick={()=> goToSingleSpell(spell.id)}>
                <img className='product-image border border-dark rounded' src= 'https://cdn.discordapp.com/attachments/1095734190189838457/1098304619668586506/Red_wizards_onslaught.webp'/>
                <p className='mt-2 text-center'>{spell.name}</p>
                <p className=''>{(spell.base_level * 100) + 50 }gp</p>
                <button className='w-75 red-border rounded bg-ivory'>Add To Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default  AllSpells


