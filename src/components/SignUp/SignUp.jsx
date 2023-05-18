import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import signUp from '../../assets/login.jpg'
import Swal from 'sweetalert2'

const SignUp = () => {

    const [error, setError]= useState('')


    const handleSignUp= event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password= form.password.value;
        const photo= form.photo.value;
        console.log(name,email,password,photo)

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
    }
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
                                <input type="text" name="photo" id="photo" placeholder='photo Url' required /> <br />
                                <input type="submit" value="Sign Up"  className='btn btn-secondary'/>
                            </form>

                            <p>Already have an account ? <Link to='/login'>Login</Link></p>
                            <button type="button" class="btn-google"> <FcGoogle className='icon'></FcGoogle> SignUp with Google</button>
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