import React, {useState, useEffect} from 'react';


const Registration = () =>{

  const [ firstNameInput, setFirstNameInput ] = useState('');
  const [ LastNameInput, setLastNameInput ] = useState('');
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ emailAddressInput, setEmailAdresssInput ] = useState('');
  const [ passwordInput, setPasswordInput ] = useState('');
  const [ confirmPasswordInput, setConfirmPasswordInput ] = useState('');


  const handleSumbit = (event) =>{
    event.preventDefault();
  }

  const handleChange = (event) =>{
    if(event.target.placeholder === 'first name') setFirstNameInput(event.target.value);
    else if(event.target.placeholder === 'last name') setLastNameInput(event.target.value);
    else if(event.target.placeholder === 'username') setUsernameInput(event.target.value);
    else if(event.target.placeholder === 'password') setPasswordInput(event.target.value);
    else if(event.target.placeholder === 'confirm password') setConfirmPasswordInput(event.target.value);
    else setEmailAdresssInput(event.target.value);
  }


  return(
    <div className='d-flex flex-column align-items-center p-3 m-5 border border-dark'>
      <h3 className='mb-3'>Register New Adventurer</h3>
      <form className='d-flex flex-column align-items-center'onSubmit={handleSumbit} >
        <div className='d-flex justify-content-center'>
          <div className='d-flex flex-column mr-5'>
            <input className='mb-3 px-2' placeholder='first name' onChange={handleChange} />
            <input className='mb-3 px-2' placeholder='last name' onChange={handleChange} />
            <input className='px-2' placeholder='email address' onChange={handleChange} />
          </div>
          <div className='d-flex flex-column px-2 mb-2' >
            <input className='mb-3 px-2' placeholder='username' onChange={handleChange} />
            <input className='mb-3 px-2' placeholder='password' onChange={handleChange} />
            <input className='px-2' placeholder='confirm password' onChange={handleChange} />
          </div>
        </div>
          <button className='w-25' >Submit</button>
      </form>
    </div>
  )
}

export default Registration;