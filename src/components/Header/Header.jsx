import React, { useContext } from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

  const {user,logOut}= useContext(AuthContext);
  // console.log(user);
  const handleLogout = ()=>{
    logOut()
    .then(result=>{})
    .catch(error=>console.log(error))
  }


  return (
    <div id="navbar">
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <div className="nav-logo">
              <div>
                <img className="logo" src={logo} alt="" />
              </div>
              <div>
                <h3> <span className="name" >Shayaan's</span> <span className="toy" > Toy</span></h3>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <li>
                <Link className="nav-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="blog">
                  Blogs
                </Link>
              </li>

              <li>
                <Link className="nav-item" to="allToy">
                  All Toy
                </Link>
              </li>

              <li>
                  <Link className="nav-item" to="AddToy">Add Toy</Link> 
              </li>

              
                
                  
                
             
            </Nav>
          </Navbar.Collapse>

         
          {
            user ? <>
              <Link className="nav-item" to="mytoy">My Toy</Link> 
            
            <span className="text-white"> <img title={user.displayName} className="photo-url" src={user.photoURL} alt="" /> <button className="btn-logout" onClick={handleLogout} >Logout</button> </span >   </>: <Link to='/login'><button className="btn-login">Login</button></Link>
              
          }
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
