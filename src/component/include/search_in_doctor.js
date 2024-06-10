import React, {useEffect, useState} from "react";
import "./search_in_doctor.css";
import Suggest from "./suggest";
import {useNavigate} from "react-router-dom";

function SearchInDoctor({info}) {
    let [doctors, setDoctors] = useState([]);
    let [city, setCity] = useState(null);
    let [spec, setSpec] = useState(null);

    useEffect(() => {
        const apiUrl = `../API/api.json`;
        setCity(document.querySelector("#city"));
        setSpec(document.querySelector("#spec"));
        document.querySelector("#city").value = info.city;
        document.querySelector("#spec").value = info.speciality;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setDoctors(data.doctors);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/search-result", { state: { city :  document.querySelector("#city").value,
                speciality : document.querySelector("#spec").value} });
    };
  return (
    <div className="search-in-doctor">
      <div className="search-in-doctor-section">
        <input id="city" type="text" placeholder="Ville" className="search-in-doctor-input" />
        <input id="spec" type="text" placeholder="Spécialité"  className="search-in-doctor-input" />
      </div>
      <div className="search-in-doctor-click">
        <button className="search-in-doctor-button" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
        <Suggest data={doctors.map((e)=>e.city)} element={city} optionsNumber={3}/>
        <Suggest data={doctors.map((e)=>e.speciality)} element={spec} optionsNumber={3}/>
    </div>
  );
}

export default SearchInDoctor;
