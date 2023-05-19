import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import signUp from '../../assets/login.jpg'
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {

    const [error, setError]= useState('')

    const {createUser}= useContext(AuthContext)


    const handleSignUp= event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password= form.password.value;
        const photoUrl= form.photoUrl.value;
        console.log(name,email,password,photoUrl)


        
        setError(' ')
        if(password.length < 6){
            Swal.fire(
                'error',
                'Password must be at least six characters',
                'error'
            )
        }
        else{
            Swal.fire(
                'success',
                'signUp successfully',
                'success'
              )
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)

            ////
            handleUpdate(loggedUser,password,photoUrl)
            ////
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }


    const handleUpdate = (createUser, name, photoUrl) => {
        updateProfile(createUser, { displayName: name, photoURL: photoUrl })
          .then(() => {})
          .catch((error) => console.error(error));
      };




    return (
        <div id='signUp-part'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">

                    <div className='signUp-form shadow'>
                        <h1>Sign Up</h1>
                            <form onSubmit={handleSignUp}>
                                <input type="text" name="name" id="name" placeholder='Name' required/> <br />
                                <input type="email" name="email" id="email" placeholder='Email' required/> <br />
                                <input type="password" name="password" id="password" placeholder='password'  required/> <br />
                                <input type="text" name="photoUrl" id="photoUrl" placeholder='photo Url' required /> <br />
                                <input type="submit" value="Sign Up"  className='btn btn-secondary'/>
                            </form>

                            <p>Already have an account ? <Link to='/login'>Login</Link></p>
                    </div>

                </div>
                <div className="col-lg-6">
                   <div className='signUp'>
                    <img src={signUp} alt="" />
                      
                   </div>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default SignUp;