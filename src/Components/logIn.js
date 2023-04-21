import React, { useState } from 'react' 

const logIn = () => {
    return(
        <div>
            <form id="logInForm">
                <input id="usernameInput" placeholder="username"></input>
                <input id="passwordInput" palceholder="password"></input>
                <button id="logInButton"> Log In </button>
            </form>
        </div>
    )
}



export default logIn;