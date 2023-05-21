import React, { useEffect } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaLocationArrow } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-right" id="footer-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-item">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <h3>
                  {" "}
                  <span className="name">Shayan's</span>{" "}
                  <span className="toy">Toy </span>
                </h3>
              </div>
            </div>

            <p>
              A kids toy shop is a store that specializes in selling <br /> toys
              and games designed specifically for children.
            </p>
            <p>
              {" "}
              <FaLocationArrow></FaLocationArrow> Addresss: 1800 Abbot Kinney
              Nebraska UK
            </p>
            <p> @ Email: hello@example.com</p>
            <p>Phone: (012) 345 6789</p>
          </div>
          <div className="col-lg-3">
            <h2>Quick Links</h2>
            <p>Help Center</p>
            <p>Redeem Voucher</p>
            <p>Contact Us</p>
            <p>Term and Rules</p>
            <p>Check Offer List</p>
          </div>
          <div className="col-lg-3">
            <h2>Information</h2>
            <p>Help Center</p>
            <p>Redeem Voucher</p>
            <p>Contact Us</p>
            <p>Term and Rules</p>
            <p>Check Offer List</p>
          </div>
          <div className="col-lg-2">
          <h2>Follow Us On</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Pinterest</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
