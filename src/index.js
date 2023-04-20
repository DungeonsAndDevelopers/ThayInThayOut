import React, { useEffect, useState } from 'react'; 
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header';

import cart from "./Components/cart"
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




