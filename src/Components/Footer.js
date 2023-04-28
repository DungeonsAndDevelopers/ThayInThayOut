import React from 'react'

const Footer = () =>{

return(
  <div className='deeper-red-bg p-2 '>
    <div className='border border-dark p-3 rounded d-flex justify-content-between' >
      <div className='d-flex flex-column' >
        <a href="https://www.dnd5eapi.co/" target="_blank">D&D 5e API</a>
        <a href='javascript:void(0)'>Contact Us</a>
        <a href='javascript:void(0)'>FAQ</a>
        <a href='javascript:void(0)'>Careers</a>
        <a href='javascript:void(0)'>Customer Service</a>
        <a href='javascript:void(0)'>Birthday Parties</a>
      </div>
      <div className='d-flex flex-column' >
        <div>123 No Liches Here Street</div>
        <div>Thayout, Thay</div>
        <div>Forgotten Realms</div>
        <div>Material Plane</div>
        <a href='javascript:void(0)'>help@thayinthayout.com</a>
        <div>(555)555-5555</div>
    </div>
    </div>
    
  </div>
)
}

export default Footer;