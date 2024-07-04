import { useState } from 'react'
import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Cart from './components/cart/Cart';
import CheckoutForm from './components/checkout/CheckoutForm';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkoutform' element={<CheckoutForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
