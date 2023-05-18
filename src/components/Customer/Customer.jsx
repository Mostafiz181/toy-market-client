import React from "react";
import "./Customer.css";
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'
import c6 from '../../assets/c6.jpg'
import { FaAmbulance } from "react-icons/fa";

const Customer = () => {
  return (
    <div id="customer-part">
      <div className="customer-text container">
        <h1>Customer Loves</h1>
        <p>POPULAR PRODUCTS</p>

        <div className="customer-item">
          <div className="row">
            <div className="col-lg-4">
              <div className="box">
                <img src={c1} alt="" />
                <div className="overlay">
                    <div className="icon-box">
                        <FaAmbulance className="icon"></FaAmbulance>

                    </div>
                </div>
                
              </div>
              <div className="semi-box">
                <h1>Jigsaw puzzle</h1>
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
                <h1>Rocking Horse</h1>
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
                <h1>Puppet Show</h1>
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
                <h1>Baby Car</h1>
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
                <h1>Taddy</h1>
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
                <h1>Teddy Bear</h1>
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
