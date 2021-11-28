import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useContext} from 'react'
import {RotateContext} from './contexts/RotateContext';

import './styles/globals.scss';
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import JoyStick from "./pages/JoyStick"
import Cart from "./pages/Cart"
import LED from "./pages/LED"
import ShopR from "./pages/ShopR"
import WelcomeR from "./pages/Welcome-r"
import HomeVideo from "./pages/HomeVideo";
import FirstPage from "./pages/FirstPage";
import ShopR90 from "./pages/ShopR90";
import HomeVideo90 from "./pages/HomeVideo90";


function App() {

  const {rotate} = useContext(RotateContext)
  return (
    <Router>
      <Routes>

        <Route path="/welcomeold" element = {<Welcome/>}/>
        <Route path="/gameold" element = {<Game/>}/>
        <Route path="/shopold" element = {<Shop/>}/>
        <Route path="/homeold" element = {<Home/>}/>
        <Route path="/LEDold" element = {<LED/>}/>
        <Route path="/welcome-rold" element = {<WelcomeR/>}/>


        <Route path="/" element = {<FirstPage/>}/>
        <Route path="/home" element = {rotate === 0 ? <HomeVideo/> : <HomeVideo90/>}/>
        <Route path="/joystick" element = {<JoyStick/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/shop" element = {rotate === 0 ? <ShopR/> : <ShopR90/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
