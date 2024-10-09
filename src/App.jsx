import React from 'react'
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './page/Home/Home';
import Signup from './page/signup/signup';
import Signin from './page/signin/signin';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App