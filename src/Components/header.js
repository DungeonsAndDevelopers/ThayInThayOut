import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
const Header = () =>{


return(
  <div>
    <div className='mt-2 mx-3 d-flex flex-row justify-content-around align-items-center '>
     
        <img  src="https://cdn.discordapp.com/attachments/1095734190189838457/1098304619668586506/Red_wizards_onslaught.webp"
        alt="Thay symbol" className='logo-hover-state' />
        <h1 className='header m-2'>Thay In, Thay Out</h1>
      <Form>
        <input placeholder='search' className='mr-2 faded-red-border' />
      </Form>
      <Link to="login"><h6 className='deeper-red-border p-1 mt-2 dim'>Login</h6></Link>
    </div>
    <div className='pt-2 pb-2 px-4 d-flex justify-content-center align-items-center deeper-red-bg border-box'>
      <h6 className='mr-5'>Shop Spells By:</h6>
      <div className="dropdown mx-5">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          School
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">Evocation</div>
          <div className="dropdown-item">Illusion</div>
          <div className="dropdown-item">Necromancy</div>
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
      <p className="mt-3 font-weight-bold mx-5 header-dropdown">Healing</p>
      <div className="dropdown mx-5">
        <button className="dropdown-toggle header-dropdown font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Damage Type
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">Force</div>
          <div className="dropdown-item">Necrotic</div>
          <div className="dropdown-item">Fire</div>
        </div>
      </div>
      <FontAwesomeIcon className='dim' icon={faCartShopping}/>
    </div>
  </div>
)
}

export default Header