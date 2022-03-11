import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.jpg";



const Contactdetails = (props) => {
    const { name, email } = props.location.state.contact;
  return (
      <div className="main">
          <div className="ui card centered">
          <div className="ui Image">
                  <img src={user} size="medium" alt="user" centered/>
              </div>
              <div className="ui content">
                  <div className="header">{name}</div>
                  <div className="description">{email}</div>
              </div>
          </div>
          <div className="ui center-div">
              <Link to="/">
              <button className="ui centered button blue">Back to Contact List</button>
              </Link>
          </div>
      </div>
    
  );
};

export default Contactdetails;