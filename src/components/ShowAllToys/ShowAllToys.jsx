import React from "react";
import "./ShowAllToys.css";

const ShowAllToys = ({ toy }) => {
  const {photo,seller,carName,category,price,quantity}=toy
  return (
    <tr>
       
      <td scope="row"><img className="photo" src={photo} alt="" /></td>
      <td scope="row">{seller}</td>
      <td>{carName}</td>
      <td>{category}</td>
      <td> $ {price}</td>
      <td>{quantity} pice</td>
      <td><button className="btn-view">View Details</button></td>
    </tr>
  );
};

export default ShowAllToys;
