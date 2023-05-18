import React from 'react';
import './Gellary.css'
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'
import {FaBuffer } from 'react-icons/fa';

const Gellary = () => {
    return (
        <div id='gellary-part' className='container'>
            <h2>Our Gallery</h2>
            <p>Small beautiful toys collection is waiting for you in our catalog</p>


            <div className='gallery-item'>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="img">
                                <img src={gal1} alt="" />
                                <div className="overlay">
                                    <div className="icon">
                                        <FaBuffer></FaBuffer>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="box">
                            <div className="img">
                                <img src={gal2} alt="" />
                                <div className="overlay">
                                    <div className="icon">
                                        <FaBuffer></FaBuffer>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="box">
                            <div className="img">
                                <img src={gal3} alt="" />
                                <div className="overlay">
                                    <div className="icon">
                                        <FaBuffer></FaBuffer>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="box">
                            <div className="img">
                                <img src={gal4} alt="" />
                                <div className="overlay">
                                    <div className="icon">
                                        <FaBuffer></FaBuffer>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="box">
                            <div className="img">
                                <img src={gal5} alt="" />
                                <div className="overlay">
                                    <div className="icon">
                                        <FaBuffer></FaBuffer>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="box">
                            <div className="img">
                                <img src={gal6} alt="" />
                                <div className="overlay">
                                    <div className="icon">
                                        <FaBuffer></FaBuffer>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gellary;