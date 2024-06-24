import { useState } from 'react'
import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';

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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
