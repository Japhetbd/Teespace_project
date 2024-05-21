import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";

const firstbar = () => {
  return (
    <div className="">
      <nav className="container-fluid bg-light  first-bar">
        <div className="container bg-light navbar">
          {/* Left Section */}
          <div className="brand">
            <a href="#">
              <img
                className="item"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331292/teespace%20images/twitter_cpxxts.png"
                alt="twitter icon"
              />
            </a>
            <a href="#">
              <img
                className="item"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331236/teespace%20images/facebook_cfwain.png"
                alt="facebook icon"
              />
            </a>
            <a href="#">
              <img
                className="item"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331277/teespace%20images/instagram_lhatu4.png"
                alt="instagram icon"
              />
            </a>
            <a href="#">
              <img
                className="item"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331305/teespace%20images/youtube_m7pxz8.png"
                alt="youtube icon"
              />
            </a>
          </div>

          {/* Middle Section */}
          <div className="navbar-nav middle-section mx-auto">
            <div className="text-dark">
              <img
                className="fire-ic"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331240/teespace%20images/fireicon_bg1trk.png"
                alt="fire symbol"
              />
              Free shipping on all U.S. orders $50+
            </div>
          </div>
          {/* Right Section */}
          <div className="right">
            <div>
              <button type="button" className="btn btn-light pt-0">
                login
              </button>
              <button type="button" className="btn btn-dark  pt-0">
                sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default firstbar;
