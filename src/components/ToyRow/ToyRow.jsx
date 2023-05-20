import React from "react";
import "./ToyRow.css";
import Swal from "sweetalert2";
import { FaCreativeCommonsNcJp } from "react-icons/fa";

const ToyRow = ({ toy }) => {
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
  } = toy;
  // delete start from here
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`,{
          method:'DELETE'

        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )
            }
          });
      }
    });
  };

  // delete end from here

  return (
    <tr>
      {/* <th scope="row"></th> */}
      <td>
        <img className="photo" src={photo} alt="" />
      </td>
      <td colspan="1">{carName}</td>
      <td>{seller}</td>
      <td>{email}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="update">update</button>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="delete">
          delete
        </button>
      </td>
    </tr>
  );
};

export default ToyRow;
