import React from "react";
import Followersdata from "../data/followersdata";
import "./followers.css";
const Followers = () => {
  return (
    <div className=" followerscard">
      <h3>who is following you</h3>
      {Followersdata.map((ele) => {
        return (
          <div className="fan">
            <div className="image">
              <div className="info">
                <div className="imginfo">
                  <img src={ele.image} alt="image" />
                </div>
                <div className="img2">
                  <p>{ele.name}</p>
                  <p>{ele.nickname}</p>
                </div>
              </div>
            </div>
            <div className="people">
              <button>Follow</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
