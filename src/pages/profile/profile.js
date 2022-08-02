import React from "react";
import Profileleft from "../../components/profilecont/profileleft";
import Profilemiddle from "../../components/profilecont/profilemiddle";
import Profileright from "../../components/profilecont/profileright";
import "./profile1.css"
const Profile = () => {
  return (
    <div className="ownprofile">
      <Profileleft />
      <Profilemiddle />
      <Profileright />
    </div>
  );
};

export default Profile;
