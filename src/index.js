import React, { useEffect, useState } from 'react'; 
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './header';
const App = () => { };




useEffect = (() => {


    return (
        <>
        <Header/>
    
        <Routes>
    
            <Route 
                path="/" 
                element={
                    <Home/>
            }/>
    
            <Route 
                path="/login" 
                element={
                    <LogIn/>
            }/>
    
        </Routes>
    
        </>
    )

})








const appElement = document.getElementById("app")
const root = createRoot(appElement)
root.render(
<HashRouter>
    <App/>
</HashRouter>
    )