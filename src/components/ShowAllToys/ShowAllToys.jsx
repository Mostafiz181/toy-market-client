import React from "react";
import "./ShowAllToys.css";
import { Link } from "react-router-dom";

const ShowAllToys = ({ toy }) => {
  const {_id,seller,carName,category,price,quantity}=toy
  return (
    <tr>
       
      
      <td scope="row">{seller}</td>
      <td>{carName}</td>
      <td>{category}</td>
      <td> $ {price}</td>
      <td>{quantity} pice</td>
      <Link to={`/singleToy/${_id}`}>

      <td><button className="btn-view">View Details</button></td>
      </Link>
    </tr>
  );
};

export default ShowAllToys;
