
import React, {  useState } from 'react';
import './CheckoutForm.css';
import Footer from '../footer/Footer';
import { IoIosArrowForward } from "react-icons/io";
import { GrTrophy } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
    paymentMethod: 'bank',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="checkout">
      <div className="h-top">
        <div className="head">
          <div className="text">
            <h1>Cart</h1>
            <div className='comp'>
              <h3>Home</h3>
              <div className='arrow'><IoIosArrowForward /></div>
              <p>Checkout</p>
            </div>
          </div>
        </div>
      </div>
    <div className="checkout-container">
      <form className="billing-form" onSubmit={handleSubmit}>
        <h2>Billing details</h2>
        <div className="form-row">
          <label>
            First Name
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </label>
        </div>
        <label>
          Company Name (Optional)
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </label>
        <label>
          Country / Region
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="Sri Lanka">Sri Lanka</option>
            {/* Add more countries if needed */}
          </select>
        </label>
        <label>
          Street Address
          <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
        </label>
        <label>
          Town / City
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          Province
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="Western Province">Western Province</option>
            {/* Add more provinces if needed */}
          </select>
        </label>
        <label>
          ZIP Code
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </label>
        <label>
          Phone
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email Address
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
           Additional Information
          <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}>
          </textarea>
        </label>
      </form>
      <div className="payment">
        <div className="payment-section">
          <div className="product-detail">
            <h3>Product</h3>
            <ul>
              <li className='asgaard'>Asgaard sofa X 1</li>
              <li className='subtotal'>Subtotal</li>
              <li className='total'>Total</li>
            </ul>
          </div>
          <div className="Subtotal">
            <h3>Subtotal</h3>
            <ul>
              <li className='rs-lite'>Rs. 250,000.00</li>
              <li className='rs-lite'>Rs. 250,000.00</li>
              <li className='rs-bold'>Rs. 250,000.00</li>
            </ul>
          </div>
        </div>
        <div className="payment-methods">
          <div className="line-a"></div>
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <label>
              <input type="radio" name="paymentMethod" value="bank" checked={formData.paymentMethod === 'bank'} onChange={handleChange} /> Direct Bank Transfer
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleChange} /> Cash On Delivery
            </label>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        </div>
        <div className="butn">
          <button type="submit">Place order</button>
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
  );
};

export default CheckoutForm;


