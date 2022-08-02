import React from "react";
import "./profilemiddleleft.css";
const Profilemiddleleft = () => {
  return (
    <div className="profilemiddleleft">
      <div className="main">
        <h2>your info</h2>
        <p>edit</p>
      </div>
      <div className="userinfo">
          <p>Status</p> <p>in Relationship</p>
      </div>
      <div className="userinfo">
          <p>Live</p> <p>in Nepal</p>
      </div>
      <div className="userinfo">
          <p>Work </p> <p>at Home</p>
      </div>
      <div className="logout">
          <p>Log Out</p>
      </div>
    </div>
  );
};

export default Profilemiddleleft;
