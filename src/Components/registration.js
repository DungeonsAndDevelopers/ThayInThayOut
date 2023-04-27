import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom' 
import registerNewAdventurer from '../AjaxHelpers/Adventurers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const Registration = () =>{

  const navigate = useNavigate();

  const [ firstNameInput, setFirstNameInput ] = useState('');
  const [ lastNameInput, setLastNameInput ] = useState('');
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ passwordInput, setPasswordInput ] = useState('');
  const [ confirmPasswordInput, setConfirmPasswordInput ] = useState('');
  const [ emailAddressInput, setEmailAdresssInput ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ messageClass, setMessageClass ] = useState('');
  const [ isViewingPassword, setIsViewingPassword ] = useState(false);
  const [ passwordInputType, setPasswordInputType ] = useState('password')


  const handleSumbit = (event) =>{
    event.preventDefault();
    
    registerNewAdventurer(firstNameInput, lastNameInput, usernameInput, passwordInput, confirmPasswordInput, emailAddressInput, setMessage, setMessageClass, navigate)
  }

  const handleChange = (event) =>{
    if(event.target.placeholder === 'first name') setFirstNameInput(event.target.value);
    else if(event.target.placeholder === 'last name') setLastNameInput(event.target.value);
    else if(event.target.placeholder === 'username') setUsernameInput(event.target.value);
    else if(event.target.placeholder === 'password') setPasswordInput(event.target.value);
    else if(event.target.placeholder === 'confirm password') setConfirmPasswordInput(event.target.value);
    else setEmailAdresssInput(event.target.value);
  }

  const handlePasswordView = () =>{
    if(isViewingPassword){
      setIsViewingPassword(false);
      setPasswordInputType('text')
    }
    else{
      setIsViewingPassword(true);
      setPasswordInputType('password')
    }
  }

  return(
    <div className='d-flex flex-column align-items-center p-3 m-5 border border-dark'>
      <h3 className='mb-3'>Register New Adventurer</h3>
      <form className='d-flex flex-column align-items-center'onSubmit={handleSumbit} >
        <div className='d-flex justify-content-center'>
          <div className='d-flex flex-column mr-5'>
            <input className='mb-3 px-2 bg-ivory' placeholder='first name' onChange={handleChange} /> 
            <input className='mb-3 px-2 bg-ivory' placeholder='last name' onChange={handleChange} />
            <input className='px-2 bg-ivory' placeholder='email address' onChange={handleChange} />
          </div>
          <div className='d-flex flex-column  mb-2' >
            <input className='mb-3 px-2 bg-ivory' placeholder='username' onChange={handleChange} />
            <div className='d-flex grey-border mb-3 px-2 bg-ivory '>
              <input className='border-0 bg-ivory' type={passwordInputType} placeholder='password' onChange={handleChange} />
              {
                isViewingPassword ? <FontAwesomeIcon onClick={handlePasswordView} className='mt-1' icon={faEye} /> :
                <FontAwesomeIcon className='mt-1' onClick={handlePasswordView} icon={faEyeSlash} />

              }
            </div>
            <div className='d-flex grey-border mb-3 px-2 bg-ivory'>
              <input className='border-0 bg-ivory' type={passwordInputType} placeholder='confirm password' onChange={handleChange} />
              {
                isViewingPassword ? <FontAwesomeIcon onClick={handlePasswordView} className='mt-1' icon={faEye} /> :
                <FontAwesomeIcon onClick={handlePasswordView} className='mt-1' icon={faEyeSlash} />

              }
            </div>
          </div>
        </div>
          <p className={messageClass} >{message}</p>
        <button className='w-25' >Submit</button>
        <Link to="/login"> Already Registered? Click Here </Link>
      </form>
    </div>
  )
}

export default Registration;