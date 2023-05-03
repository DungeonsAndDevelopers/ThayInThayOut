import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
const Header = () =>{


return(
  <div>
    <div className='mt-2 mx-3 d-flex flex-row align-items-center logo'>
     
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
          <div className="dropdown-item">Evocation</div>
          <div className="dropdown-item">Illusion</div>
          <div className="dropdown-item">Necromancy</div>
          <div className="dropdown-item">Transmutation</div>
          <div className="dropdown-item">Abjuration</div>
          <div className="dropdown-item">Enchantment</div>
          <div className="dropdown-item">Divination</div>
          <div className="dropdown-item">Conjuration</div>
        </div>
      </div>

      <div className="dropdown mx-5 ">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Casting Time
        </button>
        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">Instantaneous</div>
          <div className="dropdown-item">A Minute</div>
          <div className="dropdown-item">Ten Minutes</div>
          <div className="dropdown-item">One Hour</div>
        </div>
      </div>     
      <div className="dropdown mx-5 ">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Healing</button>
        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">HP Restoration</div>
          <div className="dropdown-item">Resurrection</div>
          <div className="dropdown-item">Other</div>
        </div>
      </div>    

      <div className="dropdown mx-5">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Damage Type
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">Force</div>
          <div className="dropdown-item">Necrotic</div>
          <div className="dropdown-item">Thunder</div>
          <div className="dropdown-item">Lightning</div>
          <div className="dropdown-item">Cold</div>
          <div className="dropdown-item">Radiant</div>
          <div className="dropdown-item">Fire</div>
          <div className="dropdown-item">Poison</div>
          <div className="dropdown-item">Acid</div>
          <div className="dropdown-item">Psychic</div>
          <div className="dropdown-item">Slashing (Magical)</div>
          <div className="dropdown-item">Piercing (Magical)</div>
          <div className="dropdown-item">Bludgeoning (Magical)</div>
        </div>
      </div>
      <Link to="/cart"><FontAwesomeIcon className='dim' icon={faCartShopping}/></Link>
      <Form>
        <input placeholder='search' className='mr-2 faded-red-border search' />
      </Form>
      <Link to="login"><p className='deeper-red-border mt-2 dim login'>Login / Register</p></Link>
    </div>
  </div>
)
}

export default Header