import React, { useState } from 'react' 



const Admin = () => {
    return (
        <div>
            <input id="searchAdventurerInput" placeholder="Search Adventurers"></input>
            <button id="searchAdventurerButton"> Search</button>
            <ol>
                <li>
                    I AM AN ADVENTURER
                    <button id="setAdminButton">ADMIN TOGGLE BUTTON</button>
                    {/* button should appear on all users in the (mapped) list */}
                </li>
                <li>
                    I AM AN ADVENTURER
                </li>
                <li>
                    I AM AN ADVENTURER
                </li>
                <li>
                    I AM AN ADVENTURER
                </li>
                <li>
                    I AM AN ADVENTURER
                </li>
                <li>
                    I AM AN ADVENTURER
                </li>
            </ol>
        </div>
    )
};

export default Admin;