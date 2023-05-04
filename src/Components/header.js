import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
const Header = () =>{

const navigate = useNavigate();
const returnToHomePage = () =>{
  navigate('/');
}
const navigateToSpellsBySchool = (schoolName) =>{
  console.log(schoolName)
  navigate(`/spells/schools/${schoolName}`)
}
return(
  <div>
    <div className='mt-2 mx-3 d-flex flex-row align-items-center logo' onClick={returnToHomePage}>
     
        <img  src="https://cdn.discordapp.com/attachments/1095734190189838457/1098304619668586506/Red_wizards_onslaught.webp"
        alt="Thay symbol" className='logo-hover-state' />
        <h1 className='header m-2'>Thay In, Thay Out</h1>
    </div>
    <div className='pt-2 pb-2 px-4 d-flex justify-content-center align-items-center deeper-red-bg border-box'>
      <p className='mr-5' id='shop-spells-by'><strong>Shop Spells By:</strong></p>
      <div className="dropdown mx-5">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          School
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Evocation')} >Evocation</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Illusion')} >Illusion</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Necromancy')} >Necromancy</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Transmutation')} >Transmutation</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Abjuration')} >Abjuration</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Enchantment')} >Enchantment</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Divination')} >Divination</div>
          <div className="dropdown-item pointer" onClick={()=>navigateToSpellsBySchool('Conjuration')} >Conjuration</div>
        </div>
      </div>

      <div className="dropdown mx-5 ">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Casting Time
        </button>
        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item pointer">Instantaneous</div>
          <div className="dropdown-item pointer">A Minute</div>
          <div className="dropdown-item pointer">Ten Minutes</div>
          <div className="dropdown-item pointer">One Hour</div>
        </div>
      </div>     
      <div className="dropdown mx-5 ">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Healing</button>
        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item pointer">HP Restoration</div>
          <div className="dropdown-item pointer">Resurrection</div>
          <div className="dropdown-item pointer">Other</div>
        </div>
      </div>    

      <div className="dropdown mx-5">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Damage Type
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item pointer">Force</div>
          <div className="dropdown-item pointer">Necrotic</div>
          <div className="dropdown-item pointer">Thunder</div>
          <div className="dropdown-item pointer">Lightning</div>
          <div className="dropdown-item pointer">Cold</div>
          <div className="dropdown-item pointer">Radiant</div>
          <div className="dropdown-item pointer">Fire</div>
          <div className="dropdown-item pointer">Poison</div>
          <div className="dropdown-item pointer">Acid</div>
          <div className="dropdown-item pointer">Psychic</div>
          <div className="dropdown-item pointer">Slashing (Magical)</div>
          <div className="dropdown-item pointer">Piercing (Magical)</div>
          <div className="dropdown-item pointer">Bludgeoning (Magical)</div>
        </div>
      </div>
      <Link to="/cart" className="cart-icon"><FontAwesomeIcon className='dim' icon={faCartShopping}/></Link>
      <Form>
        <input placeholder='search' className='mr-2 faded-red-border search' />
      </Form>
      <Link to="login"><p className='deeper-red-border mt-2 dim login'>Login / Register</p></Link>
    </div>
  </div>
)
}

export default Header