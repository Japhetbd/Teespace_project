import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";

const navbar = () => {
  return (
    <div className=" ">
      <nav className="container-fluid  navbar second-bar  navbar-expand-lg pt-0 pb-0 t-0">
        <div className="container second-div pt-0">
          <div className="left-section">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    HOME
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        HOME 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        HOME 2
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        HOME 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    TEESPACE
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        SPACE 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SPACE 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SPACE 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SHOP
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        SHOP 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SHOP 2
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        SHOP 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    BLOG
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        BLOG 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        BLOG 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        BLOG 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        PAGE 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        PAGE 2
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        PAGE 3
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section */}
          <div className="navbar-brand mx-auto">
            <img
              src="https://res.cloudinary.com/japhetbd/image/upload/v1715331224/teespace%20images/brand_wmkzfn.png"
              alt="brand-name"
            />
          </div>
          {/* Right Section */}
          <div className=" right-section " id="rightsection">
            <div className="search-div">
              <input
                type="text"
                className="form-control"
                placeholder="     Search...."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />

              <img
                className="search"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715772005/search-icon_fg0oip.png"
                alt="search-icon"
              />
            </div>

            <div className="nav-star ">
              <img
                className="star"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331300/teespace%20images/Vector_lvjwt2.png"
                alt="vector"
              />
              <div className="star-count">2</div>
            </div>
            <div className="nav-bag">
              <img
                className="bag"
                src="https://res.cloudinary.com/japhetbd/image/upload/v1715331279/teespace%20images/nav-bag_v816ou.png"
                alt="navbag"
              />
              <div className="bag-count">2</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
