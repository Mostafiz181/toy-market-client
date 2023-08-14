import React from "react";
import "./singleShop.css"

const SingleShop = ({ s }) => {
  const { photo, category, price, rating } = s;
  return (
    <div class="card ">
      <div>
        <img className="photo" src={photo} alt="" />
        <h5 class="card-title">{category}</h5>
        <p>Price: $ {price}</p>
        <p>Rating:{rating} stars</p>
        <a href="#" class="btn btn-primary">
          {" "}
          View Details{" "}
        </a>
      </div>
    </div>
  );
};

export default SingleShop;
