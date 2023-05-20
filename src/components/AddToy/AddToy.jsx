import React, { useContext } from "react";
import "./AddToy.css";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddToy = () => {

  const {user}=useContext(AuthContext)

  const handleToAdd=event=>{
    event.preventDefault();
    const form =event.target;
    const name= form.name.value;
    const seller=form.seller.value;
    const email=form.email.value;
    const category=form.category.value;
    const price =form.price.value;
    const rating= form.rating.value;
    const quantity=form.quantity.value;
    const photo=form.photo.value;
    const info={
      carName:name,
      seller,
      email,
      category,
      price,
      rating,
      quantity,
      photo
    }

    console.log(info)

    fetch('http://localhost:5000/toys',{
      method:"POST",
      headers:{
        'content-type':'application/json'

      },
      body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)

      if(data.insertedId){
        Swal.fire(
          'success',
          'Toy added successfully',
          'success'
      )

      }
    })



  }
  return (
    <div id="AddToy-part">
      <div className="container">
        <h1>add toy page</h1>

        <div >
          <div className="row toy-item">
            <div className="col-lg-12">
              <form onSubmit={handleToAdd}>
                 <input type="text" name="name" id="name" placeholder="Name" />  
                <input
                  type="text"
                  name="seller"
                  id="seller"
                  
                  placeholder="Seller Name"
                />
     
                <input
                  type="email"
                  name="email"
                  id="email"
                 
                  placeholder="Seller Email"
                />
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Sub Category"
                />
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  placeholder="Rating"
                />
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  placeholder="Quantity"
                />
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo-Url"
                />
                <br />

                <input className="btn-toy" type="submit" value="Add Toy" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
