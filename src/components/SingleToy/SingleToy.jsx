import React from 'react';
import './SingleToy.css'
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {

    const data = useLoaderData([])
    console.log(data)

    const {photo,carName,description,price,rating,quantity}=data;
    return (
        <div id='single-Toy'>
           <div className='container'>
               <h1>Single Toy</h1>

               <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                <div className="card">
                    <img src={photo} alt="" />
                   
                    <div class="card-body">
                        <h5 class="card-title">  {carName}</h5>
                        <p> Price: $ {price}</p>
                        <p> Rating: {rating} stars</p>
                        <p> Quantity: {quantity} pice</p>
                        <p>Description: {description}</p>
                       
                    </div>
                </div>
                </div>
                <div className="col-lg-2"></div>
               </div>



           </div>
        </div>
    );
};

export default SingleToy;