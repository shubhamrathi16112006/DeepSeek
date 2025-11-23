import React from "react";
import "./Home.css";

/* IMAGES — all inside src/ */
import asset0 from "./asset 0.png";
import asset1 from "./asset 1.png";
import asset2 from "./asset 2.png";
import asset3 from "./asset 3.png";
import asset4 from "./asset 4.png";
import asset5 from "./asset 5.png";
import asset6 from "./asset 6.png";
import asset7 from "./asset 7.png";
import asset8 from "./asset 8.png";
import asset9 from "./asset 9.png";
import asset10 from "./asset 10.png";
import asset14 from "./asset 14.svg";

export default function Home() {
  return (
    <div className="home-page">

      {/* SECTION 1 (asset0 as hero image) */}
      <section className="section1">
        <div className="hero-left">
          <h1>Upgrade Your Dairy Business with <br /> Next-Gen Milk Delivery Software</h1>

          <p>
            Maximize delivery efficiency, reduce manual work, and streamline your dairy operations with MilkRide.
          </p>

          <button>Get a Demo - It's Free</button>
        </div>

        <div className="hero-right">
          <img src={asset0} alt="Dashboard Overview" className="hero-img" />
        </div>
      </section>

      <hr />

      {/* SECTION 2 (Use asset1) */}
      <section className="section2">
        <div className="left">
          <h2>Effortlessly Manage Your Milk Delivery</h2>
          <p>
            Daily, alternate-day, or weekly subscriptions — fully automated.
            Offer pause vacations anytime.
          </p>
        </div>

        <div className="right">
          <img src={asset1} alt="App Preview" />
        </div>
      </section>

      <hr />

      {/* SECTION 3 - FEATURES GRID (asset2–asset6) */}
      <section className="features">
        <h2>Powerful Features</h2>

        <div className="features-grid">
          <div className="feature-box">
            <img src={asset2} alt="Feature 1" />
            <p>Smart Route Optimization</p>
          </div>

          <div className="feature-box">
            <img src={asset3} alt="Feature 2" />
            <p>Automated Billing System</p>
          </div>

          <div className="feature-box">
            <img src={asset4} alt="Feature 3" />
            <p>Real-Time Order Tracking</p>
          </div>

          <div className="feature-box">
            <img src={asset5} alt="Feature 4" />
            <p>Customer Subscription Panel</p>
          </div>

          <div className="feature-box">
            <img src={asset6} alt="Feature 5" />
            <p>Delivery Boy App</p>
          </div>
        </div>
      </section>

      <hr />

      {/* SECTION 4 – GALLERY (asset7, asset8, asset9, asset10) */}
      <section className="gallery-section">
        <h2>Product Screenshots</h2>

        <div className="gallery">
          <img src={asset7} alt="Screenshot 1" />
          <img src={asset8} alt="Screenshot 2" />
          <img src={asset9} alt="Screenshot 3" />
          <img src={asset10} alt="Screenshot 4" />
        </div>
      </section>

      <hr />

      {/* CONTACT SECTION (asset14) */}
      <section className="contact">
        <h2><span>Contact</span> Us</h2>

        <div className="contact-flex">
          <img src={asset14} className="contact-img" alt="" />

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>

    </div>
  );
}
