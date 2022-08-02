import React from "react";
import "./profilecard.css";
import { Link } from "react-router-dom";
const Profilecard = () => {
  return (
    <div className="profilecard">
      <div className="profileimages">
        <img
          src="https://media.istockphoto.com/photos/handsome-young-man-picture-id973481860?k=20&m=973481860&s=170667a&w=0&h=gVTkFG5XMSrzczJex4VaO0_dPaDUxcH-v2oBV_VY0ZE="
          alt="coverimg"
        />
        <img
          src="https://media.istockphoto.com/photos/stylish-man-posing-on-grey-background-picture-id973481674?b=1&k=20&m=973481674&s=170667a&w=0&h=N88rKUiC4M3YHGvanhxY5mMfVRsOSEKg9swrpwAnQQ0="
          alt="mainimage"
        />
      </div>
      <div className="profilename">
        <span className="align-center">name</span>
        <br />
        <span>bio</span>
      </div>
      <div className="followers">
          <div className="count">
          <div><p>110</p>
            <p>followers</p></div>
            <div><p>10</p>
            <p>following</p></div>
          </div>
      </div>
      <div className="myprofile">
        <Link to="/profile">
         <h4>my profile </h4>
        </Link>
      </div>
    </div>
  );
};

export default Profilecard;
