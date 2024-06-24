import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 
import logo from '../Assets/logo.svg';
import user_icon from '../Assets/user_icon.svg';
import search_icon from '../Assets/search_icon.svg';
import like_icon from '../Assets/like_icon.svg';
import cart_icon from '../Assets/cart_icon.svg';

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>
          <Link to='/'><img src={logo} alt="" /></Link>
          <h1><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Funiro</Link></h1>
        </div>
        <ul className='nav-menu'>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to='/shop'>Shop</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to='/about'>About</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to='/contact'>Contact</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to='/blog'>Blog</Link></li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><img src={user_icon} alt="" /></Link>
            <Link to='/search'><img src={search_icon} alt="" /></Link>
            <Link to='/favourite'><img src={like_icon} alt="" /></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Nav;