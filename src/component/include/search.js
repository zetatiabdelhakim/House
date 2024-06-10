import React, {useEffect, useState} from "react";
import "./search.css";
import Suggest from "./suggest";
import {useNavigate} from "react-router-dom";

function Search() {
    let [doctors, setDoctors] = useState([]);
    let [city, setCity] = useState(null);
    let [spec, setSpec] = useState(null);


  useEffect(() => {
    const apiUrl = `../API/api.json`;
      setCity(document.querySelector("#city"));
      setSpec(document.querySelector("#spec"));
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
    <div className="search">
      <div className="search-section">
        <input
          id="city"
          type="text"
          placeholder="Ville"
          className="search-input"
        />
        <input
          id="spec"
          type="text"
          placeholder="Spécialité"
          className="search-input"
        />
      </div>
      <div className="search-click">
        <button className="search-button" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
        <Suggest data={doctors.map((e)=>e.city)} element={city} optionsNumber={3}/>
        <Suggest data={doctors.map((e)=>e.speciality)} element={spec} optionsNumber={3}/>
    </div>
  );
}

export default Search;
