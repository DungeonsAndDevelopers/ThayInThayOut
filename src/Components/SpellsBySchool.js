import React, { useState, useEffect } from 'react';
import { fetchAllSpellsBySchool } from '../AjaxHelpers/Spells';
import { useNavigate, useParams } from 'react-router';
import { ajaxAddItemToCart } from '../AjaxHelpers/Cart';

const SpellsBySchool = () =>{

  const { schoolName } = useParams(); 
  console.log(schoolName)
  const [ allSpells, setAllSpells ] = useState([]);
  const [ addedSpellId, setAddedSpellId ] = useState('');
  const navigation = useNavigate();

  const goToSingleSpell = (spellId) => {
    navigation(`/spells/${spellId}`)
  }
  useEffect(()=>{
    fetchAllSpellsBySchool(schoolName, setAllSpells)
  },[])
  const handleSpellAddToCart = (spellId) =>{
    ajaxAddItemToCart(spellId);
    setAddedSpellId(spellId)
  }
  console.log(allSpells)
  return(
  
    <div id="all-spells" className='p-2 d-flex justify-content-center'>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          allSpells.map((spell, index) =>{
            return(
              <div key={index} className=' product-card d-flex flex-column align-items-center p-2 m-1 rounded pointer'>
                <img className='product-image border border-dark rounded bg-ivory' src= 'https://cdn.discordapp.com/attachments/1095734190189838457/1098304619668586506/Red_wizards_onslaught.webp' onClick={()=> goToSingleSpell(spell.id)} />
                <div className='mt-2 text-center' onClick={()=> goToSingleSpell(spell.id)}>{spell.name}</div>
                <div className=''>{(spell.base_level * 100) + 50 }gp</div>
                {
                  addedSpellId === spell.id ?
                  <div className='text-success visibility' >Item Added!</div> :
                  <div className='invisible' >Item Added!</div>
                }
                <button className='w-75 red-border rounded bg-ivory ' onClick={()=>{handleSpellAddToCart(spell.id)}}>Add To Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default  SpellsBySchool;