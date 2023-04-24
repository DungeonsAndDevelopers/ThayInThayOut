import React, { useEffect, useState } from 'react'; 
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header';
import Registration from './Components/registration';
import SingleSpell from './Components/singleSpell';
import Cart from "./Components/cart";
import Admin from './Components/admin';
import User from './Components/users';
const App = () => { ;

return (
	<div>
		<Header />
		<Registration />
	</div>
    )
}
	const container =  document.getElementById('app')
	const root = createRoot(container);
	root.render(<App />)




