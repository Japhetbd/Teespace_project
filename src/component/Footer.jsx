import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="container">
          <ul className="pagination justify-content-center">
            <a href="#">
              <button id="pbtn">1</button>
            </a>
            <a href="#">
              <button id="pbtn">2</button>
            </a>
            <a href="#">
              <button id="pbtn">3</button>
            </a>
            <a href="#">
              <button id="pbtn">Next</button>
            </a>
          </ul>
        </div>
      </div>
      <div class="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col  second">
              <b id="first-text">
                <img
                  className="brandName"
                  src="https://res.cloudinary.com/japhetbd/image/upload/v1715331224/teespace%20images/brand_wmkzfn.png"
                  alt="brand-name"
                />
              </b>
              <p id="second-text">hello@teespace.io</p>
              <b>+ 020360383996</b>
              <p id="third-text">3665 Paseo Place, 0960 San Diego</p>
            </div>
            <div className="col  second">
              <b id="first-text">Information</b>
              <p id="second-text">About Us</p>
              <p id="second-text">Our Blog</p>
              <p id="second-text">Start a Return</p>
              <p id="second-text">Contact Us</p>
              <p id="second-text">Shipping FAQs</p>
            </div>
            <div className="col  second">
              <b id="first-text">Useful Links</b>
              <p id="second-text">My Account</p>
              <p id="second-text">Shipping</p>
              <p id="second-text">Contact & Support</p>
              <p id="second-text">All product</p>
              <p id="second-text">Design Product</p>
            </div>
            <div className="col  second">
              <b id="first-text">Any questions</b>
              <b id="first-text"> hello@teespace.com </b>
              <p id="second-text">Find answers to all your questions</p>
              <div className="navbar-brand">
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
                    src="https://microweber.com/userfiles/templates/microweber_com//home/img/facebook.svg"
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
                    src="https://microweber.com/userfiles/templates/microweber_com//home/img/youtube.svg"
                    alt="youtube icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="payment-method">
            <div className="payment">
              <img
                className="payment-image"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331284/teespace%20images/payment-method_dluzfk.png"
                alt="youtube icon"
              />
            </div>
            <p className="copyright">2022 TeeSpace All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
