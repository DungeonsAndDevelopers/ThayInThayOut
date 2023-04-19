import React, { useState } from 'react' 
import Form from 'react-bootstrap/Form'

const Header = () =>{


return(
  <div>
    <div className='d-flex justify-content-between m-2 align-items-center'>
      <img  src="https://cdn.discordapp.com/attachments/1095734190189838457/1095734208112107723/250.png"
      alt="Thay symbol"/>
      <h3 >Thay In, Thay Out</h3>
      <Form>
        <input placeholder='search' />
      </Form>
      <h3>Login</h3>
    </div>
  </div>
)
}

export default Header