import React, { useEffect, useState } from 'react'; 
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header';
import SingleSpell from './Components/singleSpell';
import Cart from "./Components/cart";
import Admin from './Components/admin';
import User from './Components/users';
import logIn from './Components/logIn';
const App = () => { ;

return (
	<div>
		<Header />
		<h1>TEST</h1>
	</div>
    )
}
	const container =  document.getElementById('app')
	const root = createRoot(container);
	root.render(<App />)




