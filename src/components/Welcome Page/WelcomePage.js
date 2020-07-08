import React from "react";
import "./welcomepage.css";
import { Link } from "react-router-dom";
import category from "../../img/category-img.jpg";


function WelcomePage(props) {
    return(
        <div id="parent">
          <div className="welcome-page">
              <div className="img-container">
                <img src={category} alt="img" />
              </div>
              <div className="text-container">
                <h3>{props.title}</h3>
                <p>{props.introduction}</p>
              </div>
              <div className="button-container">
                <Link to="/main-categories-page">
                  <button type="button">Get Started</button>   
                </Link>
              </div>
          </div>
        </div>
    )
}


export default WelcomePage;