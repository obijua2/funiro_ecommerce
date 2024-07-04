import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-brand">Funiro.</h2>
          <div className="address">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </div>
        </div>
        <div className="footer-section">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className="help">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className="newsletter">
            <h3>Newsletter</h3>
            <form action="#" method="post" className="newsletter-form">
              <div className="email">
                 <input type="email" name="email" placeholder="Enter Your Email Address" required />
              </div>
              <div className="bttn">
                 <button type="submit">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Funiro. All rights reverved</p>
        </div>
    </div>
  )
}

export default Footer