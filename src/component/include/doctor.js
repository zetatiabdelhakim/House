import React from "react";
import { ReactDOM } from "react";
import "./doctor.css";
import {useNavigate} from "react-router-dom";

function Doctor({doctor}){
    const navigate = useNavigate();
    const handleProfile = () => {
        navigate("/profile", { state : {doctor : doctor, info : {city: document.querySelector("#city").value, speciality: document.querySelector("#spec").value}}});
    };
    return(
    <div className="doctor" onClick={handleProfile}>
       <div className="main">
        <p className="name">{doctor.name}</p>
        <p className="rating">{doctor.rating} <i className="fa-solid fa-star"></i></p>
       </div>
       <p className="locate">{doctor.localisation}</p>
    </div>
    );
}

export default Doctor;