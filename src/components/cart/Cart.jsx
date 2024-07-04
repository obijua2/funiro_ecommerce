import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import Asgaard from '../Assets/Asgaard.png';
import { IoIosArrowForward } from "react-icons/io";
import { LiaClosedCaptioning } from 'react-icons/lia';
import { GrTrophy } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";
import Footer from '../footer/Footer';

const Cart = () => {
  return (
    <div className='cart'>
      <div className="h-top">
        <div className="head">
          <div className="text">
            <h1>Cart</h1>
            <div className='comp'>
              <h3>Home</h3>
              <div className='arrow'><IoIosArrowForward /></div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
        <div className="cart-details">
        <div className="details">
            <div className="line-1">
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
            </div>
            <div className="line-2">
            <img src={Asgaard.png} alt="" />
                <ul>
                    <li className='name'>Asgaard sofa</li>
                    <li className='rsa'>Rs. 250,000.00</li>
                    <li className='qty'>1</li>
                    <li className='rsb'>Rs. 250,000.00</li>
                </ul>
            </div>
        </div>
        <div className="cart-totals">
            <div className="box">
                <div className="subtotal">
                    <h1>Cart Total</h1>
                    <ul>
                        <li>Subtotal</li>
                        <li className='sub-rs'>Rs. 250,000.00</li>
                    </ul>
                </div>
                <div className="total">
                    <ul>
                        <li>Total</li>
                        <li className='tot-rs'>Rs. 250,000.00</li>
                    </ul>
                </div>
                <button className="check-out"><Link style={{textDecoration: 'none', color: 'black'}} to='/checkoutform'>Check Out</Link></button>
            </div>
        </div>
        </div>


        <div className="top-footer">
        <div className="features">
          <div className="feature">
            <span className="icon"><GrTrophy /></span>
            <div className="text">
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="feature">
            <span className="icon"><GrStatusGood /></span>
            <div className="text">
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="feature">
            <span className="icon"><PiShippingContainerBold /></span>
            <div className="text">
              <h3>Free Shipping</h3>
              <p>Order over 150$</p>
            </div>
          </div>
          <div className="feature">
            <span className="icon"><MdOutlineSupportAgent /></span>
            <div className="text">
              <h3>24 / 7 Support</h3>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Cart;