import React, { useEffect, useState } from "react";
import "./AllToy.css";
import ShowAllToys from "../ShowAllToys/ShowAllToys";


const AllToy = () => {

  const [allToy,setAllToy]= useState([])

  const [carSearch,setCarSearch]= useState(' ')
  console.log(allToy)

  useEffect(()=>{
    fetch('https://simple-toy-server.vercel.app/toys')
    .then(res=>res.json())
    .then(data=>{
      setAllToy(data)
    })
  },[])


  const handleCarSearch = () => {
    fetch(`https://simple-toy-server.vercel.app/carSearchByName/${carSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  };




  return (
    <div id="allToy-part">
      <div className="container">

        <h1>All Toys</h1>

        <div className="search"><input onChange={(e)=> setCarSearch(e.target.value)} type="text" name="name" id=""  placeholder="Search Toy...."/> <button className="btn-search" onClick={handleCarSearch}>search</button> </div> 
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


