import React, {useEffect, useState} from "react";
import { ReactDOM } from "react";
import "./search_result.css";
import Header2 from "./include/header2";
import SearchInDoctor from "./include/search_in_doctor";
import bg from "../img/bg2.jpg";
import Footer from "./include/footer";
import SearchDiv from "./include/search_div";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const info = location.state;
  let [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const apiUrl = `../API/api.json`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setDoctors(data.doctors);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  setInterval(() => {
    let srchDiv = document.querySelector(".search-result .Search-div");
    let header2 = document.querySelector(".header2");
    let searchIn = document.querySelector(".search-in-doctor");
    let wt = document.querySelector(".search-result");
    if(srchDiv && header2 && searchIn){
      let header2Height = header2.offsetHeight;
      let searchInHeight = searchIn.offsetHeight;
      let fixedHeight = 125;
      let wh = wt.offsetHeight;
      let totalHeight = wh - header2Height - searchInHeight - fixedHeight;
      srchDiv.style.height = totalHeight + "px";
    }
  }, 300);

  return (
    <div className="search-result">
      <div className="bg-container">
        <img className="bg" src={bg} alt="" />
      </div>
      <div className="main">
        <Header2 />
        <SearchInDoctor info={{city: info.city , speciality: info.speciality}} />
        <SearchDiv doctors={doctors.filter((elem, i)=> info.speciality == "" && elem.city==info.city || info.city == "" && elem.speciality==info.speciality || elem.city==info.city && elem.speciality==info.speciality
        )}/>
        <Footer />
      </div>
    </div>
  );
}

export default SearchResult;
