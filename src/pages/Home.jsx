import React from "react";
import "../styles/Home.css";

/* IMAGES — using working URLs that match your design */
const asset0 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
const asset1 = "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80";
const asset2 = "https://cdn-icons-png.flaticon.com/512/2906/2906276.png"; // Route optimization
const asset3 = "https://cdn-icons-png.flaticon.com/512/3135/3135692.png"; // Billing system
const asset4 = "https://cdn-icons-png.flaticon.com/512/7613/7613876.png"; // Order tracking
const asset5 = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"; // Customer panel
const asset6 = "https://cdn-icons-png.flaticon.com/512/3095/3095583.png"; // Delivery app
const asset7 = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80";
const asset8 = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80";
const asset9 = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80";
const asset10 = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80";
const asset14 = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80";

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
          <img src={asset14} className="contact-img" alt="Contact Illustration" />

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