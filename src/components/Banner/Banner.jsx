import React from "react";
import banner from "../../assets/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner-part">
      <img src={banner} alt="" />

      <div className="overlay">
        <div className="banner-text">
          <h1>Toys for kids</h1>
          <h2>Online Shopping</h2>
          <p>
            This is our online toys shope. Here you can find any kind of toys
            for your kids.
          </p>

          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
