import React from 'react';
import "../styles/Footer.css";

export default function Footer() {
  const logo = "https://milkride.com/wp-content/uploads/2024/04/MilkRide-logo.png";

  return (
    <>
      <footer className="footer">
        <div className="fo1">
          <div className="ffo1">
            <img src={logo} alt="MilkRide Logo" />
          </div>
          <div className="ffo2">
            <p>A SaaS based milk delivery software designed to streamline and automate milk delivery operations for dairy businesses.</p>
          </div>
        </div>

        <div className="fo2">
          <div className="ffo3">
            <p style={{fontWeight: "bold"}}>Quick Links</p>
          </div>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Why Milkride?</li>
              <li>Features</li>
              <li>Blogs</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>

        <div className="fo3">
          <div className="ffo4">
            <p style={{fontWeight: "bold"}}>Contact</p>
          </div>
          <nav>
            <ul>
              <li><i className="fa-regular fa-envelope"></i> hello@milkride.com</li>
              <li><i className="fa-solid fa-phone-flip"></i> +91-999-855-9055</li>
              <li><i className="fa-solid fa-phone-flip"></i> +91-957-484-6188</li>
            </ul>
          </nav>
        </div>
      </footer>
      
      <hr />

      <div className="footer1">
        <div className="f11">
          <div className="f111">
            <div className="f01">Terms of Service</div>
            <div className="f02">Privacy policy</div>
          </div>
          <div className="f112" style={{fontSize: "24px", display: "flex", gap: "15px"}}>
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className="f12">
          <p>© 2024 MilkRide. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}