import React, { useEffect } from "react";
import "./Customer.css";
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'
import c6 from '../../assets/c6.jpg'
import { FaAmbulance } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Customer = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="customer-part">
      <div data-aos="fade-up" className="customer-text container">
        <h1>Customer Loves</h1>
        <p>POPULAR PRODUCTS</p>

        <div className="customer-item">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="box">
                <img src={c1} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Yellow Prado</h1>
                <p>It makes your child be happy</p>
               
              </div>

              
            </div>
            <div className="col-lg-4">
            <div className="box">
                <img src={c2} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Rocking Prado</h1>
                <p>It makes your child be happy</p>
               
              </div>
            </div>
            <div className="col-lg-4">
            <div className="box">
                <img src={c3} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Sports Prado</h1>
                <p>It makes your child be happy</p>
               
              </div>
            </div>
            <div className="col-lg-4">
            <div className="box">
                <img src={c4} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Red Prado</h1>
                <p>It makes your child be happy</p>
               
              </div>
            </div>
            <div className="col-lg-4">
            <div className="box">
                <img src={c5} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Red Prado pro</h1>
                <p>It makes your child be happy</p>
               
              </div>
            </div>
            <div className="col-lg-4">
            <div className="box">
                <img src={c6} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Sky Prado</h1>
                <p>It makes your child be happy</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
