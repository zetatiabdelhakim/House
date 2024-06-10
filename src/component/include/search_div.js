import React from "react";
import { ReactDOM } from "react";
import "./search_div.css";
import Doctor from "./doctor";
function SearchDiv({doctors}){
    return(
    <div className="Search-div">
        {doctors.map((elm, i)=><Doctor doctor={elm} key={i}/>)}
    </div>
    );
}

export default SearchDiv;