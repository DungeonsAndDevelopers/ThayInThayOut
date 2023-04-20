import React, { useState, useEffect } from 'react';
import fetchAllSpellsFE from '../AjaxHelpers/Spells';

const AllSpells = () =>{

  const [ allSpells, setAllSpells ] = useState([]);

  useEffect(()=>{
    fetchAllSpellsFE(setAllSpells);
  },[])
  console.log(allSpells)
  return(
    <div id="all-spells">
      <div className='d-flex flex-wrap border'>
        {
          allSpells.map((spell, index) =>{
            return(
              <div key={index}>
                <img src= 'https://cdn.discordapp.com/attachments/1095734190189838457/1098304619668586506/Red_wizards_onslaught.webp'/>
                <p>{spell.name}</p>
                <p>100gp</p>
                <button>Add To Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default  AllSpells


