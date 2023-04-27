import React, { useEffect, useState } from 'react'; 
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header';
import Home from './Components/home';
import AllSpells from './Components/AllSpells';
import SingleSpell from './Components/singleSpell';
import Cart from "./Components/cart";
import Admin from './Components/admin';
import User from './Components/users';
import Login from './Components/logIn';
import Registration from './Components/registration';
const App = () => { ;

return (
	<div>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/spells' element={<AllSpells />}/>
			<Route path='/spells/:spellId' element={<SingleSpell/>} />
			<Route path='/cart' element={<Cart />}/>
			<Route path='/admin' element={<Admin/>}/>
			<Route path='/user/:username' element={<User/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='/register' element={<Registration/>}/>
		</Routes>
	
	</div>
    )
}
	const container =  document.getElementById('app')
	const root = createRoot(container);
	root.render(
		<HashRouter>
			<App />
		</HashRouter>
	)

