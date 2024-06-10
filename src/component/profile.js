import React, { useEffect } from "react";
import { ReactDOM } from "react";
import Footer from "./include/footer";
import "./profile.css";
import bg from "../img/vlcsnap-2019-10-23-07h26m27s834.png";
import Header2 from "./include/header2";
import ProfilePage from "./include/profilePage";
import Buttona from "./include/buttonB";
import {Link, useLocation} from "react-router-dom";
function Profile() {
    const location = useLocation();
    const state = location.state;
  return (
    <div className="Profile">
      <div className="bg-container">
        <img className="bg" src={bg} alt="" />
      </div>
      <div className="main">
        <Header2 />
        <ProfilePage doctor={state.doctor}/>
        <Link to="/search-result" state={{city: state.info.city, speciality: state.info.speciality}} > <Buttona /> </Link>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
