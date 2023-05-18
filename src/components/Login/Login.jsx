import React, { useContext } from 'react';
import './Login.css'
import login from '../../assets/login.jpg'
import { Link } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {

    const {signIn}=useContext(AuthContext)

    const handleLogin = event=>{
        event.preventDefault();
        const form =event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password =form.password.value;
        console.log(name,email,password);


        signIn(email,password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
    return (
        <div id='login-part'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6">

                        <div className='login-form shadow'>
                            <h1>Login</h1>
                                <form onSubmit={handleLogin}>
                                    <input type="text" name="name" id="name" placeholder='Name'/> <br />
                                    <input type="email" name="email" id="email" placeholder='Email'/> <br />
                                    <input type="password" name="password" id="password" placeholder='password' /> <br />
                                    <input type="submit" value="Login"  className='btn btn-secondary'/>
                                </form>

                                <p>New to Shayaan's Toy ? <Link to='/signUp'>SignUp</Link></p>
                                <button type="button" class="btn-google"> <FcGoogle className='icon'></FcGoogle> Login with Google</button>
                        </div>

                    </div>
                    <div className="col-lg-6">
                       <div className='login'>
                          <img src={login} alt="" />
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;