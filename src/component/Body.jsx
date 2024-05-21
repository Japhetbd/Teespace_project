import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Body.css";

const Body = () => {
  return (
    <div className="container Body">
      <div className="body-left">
        <div id="blh-text-1">Search</div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="blh-text">Categories</div>
        <div id="p-item">
          <p id="b-item">Design Services </p>
          <p id="b-item">6 </p>
        </div>
        <div id="p-item">
          <p id="b-item">HaruTheme </p>
          <p id="b-item">4 </p>
        </div>
        <div id="p-item">
          <p id="b-item">Print Company </p>
          <p id="b-item">3 </p>
        </div>
        <div id="p-item">
          <p id="b-item">Print Shop </p>
          <p id="b-item">3 </p>
        </div>
        <div id="p-item">
          <p id="b-item">Uncategorized</p>
          <p id="b-item">5</p>
        </div>

        <div id="blh-text">Letest Posts</div>
        <div className="letest-posts">
          <img
            className="lpimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331248/teespace%20images/image-1_yb1zoq.png"
            alt=""
          />
          <div id="imageText">
            <div id="b-item">Design Services</div>
            <div id="d-item">What make beautiful with us</div>
          </div>
        </div>
        <div className="letest-posts">
          <img
            className="lpimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331252/teespace%20images/image-2_lyqdpf.png"
            alt=""
          />
          <div id="imageText">
            <div id="b-item">Design Services, HaruTheme</div>
            <div id="d-item">Mirum est notare quam littera gothica</div>
          </div>
        </div>
        <div className="letest-posts">
          <img
            className="lpimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331259/teespace%20images/image-3_tetbs1.png"
            alt=""
          />
          <div id="imageText">
            <div id="b-item">Design Services, HaruTheme</div>
            <div id="d-item">Ut wisi enim ad menin veniam </div>
          </div>
        </div>
        <div className="letest-posts">
          <img
            className="lpimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331264/teespace%20images/image-4_p0emr7.png"
            alt=""
          />
          <div id="imageText">
            <div id="b-item">HaruTheme</div>
            <div id="d-item">How to make a t-shirt Design online</div>
          </div>
        </div>
        <div className="letest-posts">
          <img
            className="lpimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331270/teespace%20images/image-5_dtvhvj.png"
            alt=""
          />
          <div id="imageText">
            <div id="b-item">Print Company</div>
            <div id="d-item">Let say it your way</div>
          </div>
        </div>

        <div className="banner-blog">
          <img
            className="banner-blog"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331025/teespace%20images/banner-blog_rpxtly.png"
            alt=""
          />
        </div>
        <div id="blh-text">Tags</div>
        <div className="buttons">
          <button>Comapany</button>
          <button>Design Services</button>
          <button>HaruTheme</button>
          <button>Pricom</button>
          <button>Print</button>
          <button>Printing</button>
          <button>Printshop</button>
        </div>
      </div>

      <div className="container main-body">
        <div className="container mb-item">
          <img
            id="bimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331032/teespace%20images/bimage-1_zzvsxy.png"
            alt=""
          />
          <button type="button" className="mbi-button">
            Design Services
          </button>
          <div>
            <img
              id="star"
              src="https://res.cloudinary.com/japhetbd/image/upload/v1715331289/teespace%20images/star_yhyevo.png"
              alt="star"
            />
            <b>Make yourself happy with our T-shirt customer designer</b>
          </div>
          <div className="date-div">
            <p id="p-text">August 20, 2022 &#8213; by</p>
            <strong>admin</strong>
          </div>

          <p id="p-text">
            Nullam imperdiet, sem at frangilla lobortis sem libh frangilla libh,
            idae gravida mi purus sit amet erat. ut dictum nisi massa. maecenas
            id justo rhoncus valutpat nunc sit amet facilisiulum scelerisque...
          </p>
          <button type="button" className="btn readmore btn-success">
            Read More
          </button>
          <div className="horizontal-line "></div>
        </div>

        <div className="container mb-item">
          <img
            id="bimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331043/teespace%20images/bimage-2_hbjrfw.png"
            alt=""
          />
          <button type="button" className="mbi-button">
            Print Company
          </button>
          <button type="button" className="mbi-button">
            Print Shop
          </button>
          <div>
            <b>Are you ready to make it awesome with us</b>
          </div>
          <div className="date-div">
            <p id="p-text">August 20, 2022 &#8213; by</p>
            <strong>admin</strong>
          </div>

          <p id="p-text">
            Nullam imperdiet, sem at frangilla lobortis sem libh frangilla libh,
            idae gravida mi purus sit amet erat. ut dictum nisi massa. maecenas
            id justo rhoncus valutpat nunc sit amet facilisiulum scelerisque...
          </p>
          <button type="button" className="btn readmore btn-success">
            Read More
          </button>
          <div className="horizontal-line "></div>
        </div>

        <div className="container mb-item">
          <img
            id="bimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331216/teespace%20images/bimage-3_richyu.png"
            alt=""
          />
          <button type="button" className="mbi-button">
            Print Company
          </button>
          <div>
            <b>The best custom T-shirt designer wordpress theme</b>
          </div>
          <div className="date-div">
            <p id="p-text">August 20, 2022 &#8213; by</p>
            <strong>admin</strong>
          </div>
          <p id="p-text">
            Nullam imperdiet, sem at frangilla lobortis sem libh frangilla libh,
            idae gravida mi purus sit amet erat. ut dictum nisi massa. maecenas
            id justo rhoncus valutpat nunc sit amet facilisiulum scelerisque...
          </p>
          <button type="button" className="btn readmore btn-success">
            Read More
          </button>
          <div className="horizontal-line "></div>
        </div>
        <div className="container mb-item">
          <img
            id="bimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331221/teespace%20images/bimage-4_ymevcn.png"
            alt=""
          />
          <button type="button" className="mbi-button">
            Print Shop
          </button>
          <div>
            <b>We can make your work better</b>
          </div>
          <div className="date-div">
            <p id="p-text">August 20, 2022 &#8213; by</p>
            <strong>admin</strong>
          </div>

          <p id="p-text">
            Nullam imperdiet, sem at frangilla lobortis sem libh frangilla libh,
            idae gravida mi purus sit amet erat. ut dictum nisi massa. maecenas
            id justo rhoncus valutpat nunc sit amet facilisiulum scelerisque...
          </p>
          <button type="button" className="btn readmore btn-success">
            Read More
          </button>
          <div className="horizontal-line "></div>
        </div>
        <div className="container mb-item">
          <img
            id="bimage"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715331221/teespace%20images/bimage-4_ymevcn.png"
            alt=""
          />
          <button type="button" className="mbi-button">
            Print Company
          </button>
          <div>
            <b>Let say it your way</b>
          </div>
          <div className="date-div">
            <p id="p-text">August 20, 2022 &#8213; by</p>
            <strong>admin</strong>
          </div>

          <p id="p-text">
            Nullam imperdiet, sem at frangilla lobortis sem libh frangilla libh,
            idae gravida mi purus sit amet erat. ut dictum nisi massa. maecenas
            id justo rhoncus valutpat nunc sit amet facilisiulum scelerisque...
          </p>
          <button type="button" className="btn readmore btn-success">
            Read More
          </button>
          <div className="horizontal-line "></div>
        </div>
        <div className="container mb-item">
          <img
            className="content-link"
            src="https://res.cloudinary.com/japhetbd/image/upload/v1715932851/div.post-content-link_nchc7n.png"
            alt=""
          />

          <div>
            <b>How to make a T-shirt design online</b>
          </div>
          <div className="date-div">
            <p id="p-text">August 20, 2022 &#8213; by</p>
            <strong>admin</strong>
          </div>

          <p id="p-text">
            Nullam imperdiet, sem at frangilla lobortis sem libh frangilla libh,
            idae gravida mi purus sit amet erat. ut dictum nisi massa. maecenas
            id justo rhoncus valutpat nunc sit amet facilisiulum scelerisque...
          </p>
          <button type="button" className="btn readmore btn-success">
            Read More
          </button>
          <div className="horizontal-line "></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
