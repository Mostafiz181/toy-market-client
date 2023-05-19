import React from 'react';
import './Collection.css'
import cal1 from '../../assets/collection1.jpg'
import cal2 from '../../assets/collection2.jpg'
import cal3 from '../../assets/collection3.jpg'
import cal4 from '../../assets/collection4.jpg'
import cal5 from '../../assets/collection5.jpg'
import cal6 from '../../assets/collection6.jpg'
import {FaBuffer } from 'react-icons/fa';

const Collection = () => {
    return (
        <div id='collection-part' className='container'>
            <h2>Our Collections</h2>
            <p>Small beautiful toys collection is waiting for you in our catalog</p>


            <div className='collection-item'>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box ">
                            <div className="img">
                                <img src={cal1} alt="" />
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
                                <img src={cal2} alt="" />
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
                                <img src={cal3} alt="" />
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
                                <img src={cal4} alt="" />
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
                                <img src={cal5} alt="" />
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
                                <img src={cal6} alt="" />
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

export default Collection;