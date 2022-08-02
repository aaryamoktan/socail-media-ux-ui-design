import React from "react";
import "./home.css";
import Login from "../../components/login/login";
import Profileside from "../../components/profileside/Profileside";
import Postside from "../../components/postside/Postside";
import Rightside from "../../components/rightside/Rightside";
const Home = () => {
  return (
    <div className="home">
      <Profileside />
      <Postside />
      <Rightside />
    </div>
  );
};
export default Home;
