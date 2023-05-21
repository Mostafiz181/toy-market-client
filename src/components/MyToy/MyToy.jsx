import React, { useContext, useEffect, useState } from "react";
import "./MyToy.css";
import { AuthContext } from "../providers/AuthProvider";
import ToyRow from "../ToyRow/ToyRow";
import { useLoaderData } from "react-router-dom";

const MyToy = () => {

    const loadedToys=useLoaderData
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
//   const [del,setDel]=useState(loadedToys)

//    const [cars,setCars]=useState(loadedToys)

  const url = `http://localhost:5000/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div id="myToy-part">
      <div className="row">
        <div className="col-lg-12">
          <div className="container">

            <h1>My Toys</h1>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">photo</th>
                  <th scope="col">Car Name</th>
                  <th scope="col">Seller</th>
                  <th scope="col">Email</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <ToyRow 
                     key={toy._id}
                     toy={toy}
                    toys={toys}
                    setToys={setToys}
                  
                   ></ToyRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
