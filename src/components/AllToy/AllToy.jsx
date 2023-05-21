import React, { useEffect, useState } from "react";
import "./AllToy.css";
import ShowAllToys from "../ShowAllToys/ShowAllToys";


const AllToy = () => {

  const [allToy,setAllToy]= useState([])
  console.log(allToy)

  useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res=>res.json())
    .then(data=>{
      setAllToy(data)
    })
  },[])


  return (
    <div id="allToy-part">
      <div className="container">

        <h1>All Toys</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Seller</th>
            <th scope="col">Toy Name</th>
            <th scope="col">Sub-Category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>

                {
                  allToy.map(toy=> <ShowAllToys
                  key={toy._id}
                  toy={toy}
                  
                  ></ShowAllToys>)
                }


        </tbody>
      </table>



      </div>
    </div>
  );
};

export default AllToy;


