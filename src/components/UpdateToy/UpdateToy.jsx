import React from 'react';
import './UpdateToy.css'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toy = useLoaderData();
    const {
        _id,
        photo,
        carName,
        seller,
        email,
        category,
        price,
        rating,
        quantity,
        description,
    } = toy;


    const handleToUpdate=event=>{
        event.preventDefault();
        const form =event.target;
        const price =form.price.value;
        const quantity=form.quantity.value;
        const description= form.description.value;
        const updateToy={
          carName:name,
          seller,
          email,
          category,
          price,
          rating,
          quantity,
          photo,
          description
        }
    
        console.log(updateToy)
    
        fetch(`http://localhost:5000/toys/${_id}`,{
          method:"PUT",
          headers:{
            'content-type':'application/json'
    
          },
          body:JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
    
          if(data.modifiedCount>0){
            Swal.fire(
              'success',
              'Toy update successfully',
              'success'
          )
    
          }
        })
    
    
    
      }


    
    return (

        <div id="AddToy-part">
        <div className="container">
          <h1>Update toy page:{carName} </h1>
  
          <div >
            <div className="row toy-item">
              <div className="col-lg-12">
                <form onSubmit={handleToUpdate}>
                   {/* <input 
                   type="text" 
                   name="name" 
                   id="name" 
                   defaultValue={carName}
                   placeholder="Name" 
                   />   */}


                  {/* <input
                    type="text"
                    name="seller"
                    id="seller"
                    defaultValue={seller}
                    placeholder="Seller Name"
                  /> */}
       


                  <input
                    type="text"
                    name="price"
                    id="price"
                    defaultValue={price}
                    placeholder="Price"
                  />

                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    defaultValue={quantity}
                    placeholder="Quantity"
                  />

                  <br />

                  <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue={description}
                    placeholder="Description"
                  />
  
                  <input className="btn-toy" type="submit" value="Update Toy" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
};

export default UpdateToy;