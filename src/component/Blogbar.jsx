import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";

const blogbar = () => {
  return (
    <div className="blog-third-bar">
      <div className="container-fluid third-bar  pt-0 pb-0 ">
        <div className="container blog-div mt-0">
          <div id="blog">Blog</div>
          <div id="home-blog">
            Home -<strong>Blog</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default blogbar;
