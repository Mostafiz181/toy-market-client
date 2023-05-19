import React from "react";
import "./NotFound.css";
import error from "../../assets/error.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="error-part">
            <img className="error-img" src={error} alt="" />
            <div className="overlay">
              <div className="error-item">
                <h1>404</h1>
                <h2>Opps !!</h2>
                <h3>
                  The page you are looking for might have been removed had its <br />
                  name changed of is temporarily unavailable
                </h3>

                <Link to="/">
                  {" "}
                  <button className="btn-error">GO TO HOMEPAGE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
