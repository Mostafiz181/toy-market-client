import React from "react";
import "./Gallery.css";
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.jpg";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import gal5 from "../../assets/gal5.jpg";
import gal6 from "../../assets/gal6.jpg";
import gal7 from "../../assets/gal7.jpg";
import gal8 from "../../assets/gal8.jpg";
import gal9 from "../../assets/gal9.jpg";
import { FcInTransit } from "react-icons/fc";

const Gallery = () => {
  return (
    <div id="gallery-part" className="container">
      <div className="gallery-text">
        <h1>Our Gallery</h1>
        <p>
          This is our gallery.Here you can find any kind of toy's car. <br />{" "}
          Which would by happier for your children.
        </p>
      </div>

      <div className="gallery-item">
        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <img src={gal1} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <img src={gal2} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <img src={gal3} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <img src={gal4} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box">
              <img src={gal5} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box">
              <img src={gal6} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box">
              <img src={gal7} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box">
              <img src={gal8} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box">
              <img src={gal9} alt="" />
              <div className="overlay">
                <div className="icon">
                  <FcInTransit></FcInTransit>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
