import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 
import { loginAdventurer } from '../AjaxHelpers/Adventurers';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  
  const navigation = useNavigate();
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ passwordInput, setPasswordInput ] = useState('');
  const [ isViewingPassword, setIsViewingPassword ] = useState(false);
  const [ passwordInputType, setPasswordInputType ] = useState('password');
  const [ message, setMessage ] = useState('placeholder');
  const [ messageClass, setMessageClass ] = useState('invisible');
  
  const handlePasswordView = () =>{
    if(isViewingPassword){
      setIsViewingPassword(false);
      setPasswordInputType('password')
    }
    else{
      setIsViewingPassword(true);
      setPasswordInputType('text')
    }
  }
  const handleChange = (event) =>{
    if(event.target.placeholder === 'username') setUsernameInput(event.target.value);
    else setPasswordInput(event.target.value)
  }

  const handleSumbit = (event) =>{
    event.preventDefault();
    loginAdventurer(usernameInput, passwordInput, setMessage, setMessageClass, navigation);
  }

  return(
    
    <div className='p-5'>
      { window.localStorage.getItem('advToken') ? 
      <h2>You are already Logged in</h2>: 
      <div className='d-flex flex-column align-items-center' >
        <h3>Welcome Back Adventurer!</h3>
        <h3 className='mb-5'>Login</h3>
        <form onSubmit={handleSumbit} className='d-flex flex-column align-items-center justify-content-center'>
          <input className='mb-2 bg-ivory pl-2 pr-4' placeholder="username" onChange={handleChange}/>
          <div className='d-flex grey-border mb-3 px-2 bg-ivory '>
            <input className='no-outline border-0 bg-ivory' type={passwordInputType} placeholder='password' onChange={handleChange} />
            {
            isViewingPassword ? <FontAwesomeIcon onClick={handlePasswordView} className='mt-1' icon={faEye} /> :
            <FontAwesomeIcon className='mt-1' onClick={handlePasswordView} icon={faEyeSlash} />
            }
          </div>
          <p className={messageClass} >{message}</p>
          <button className='px-2 red-shadow mb-2'> Log In </button>
          <Link to="/register"> Not Registered? Click Here! </Link> 
        </form>
      </div> 
}
    </div>
)
        
}



export default Login;