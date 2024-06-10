import React from "react";
import { ReactDOM } from "react";
import "./header.css";
import icon from "../../img/icon.svg";
import royaume from "../../img/maroc royaume.png"
import {Link} from "react-router-dom";

function Header(){
    

    return(
    <div className="header">
        <Link to="/"><img className="icon" src={icon} alt="" /></Link>
        <img className="royaume" src={royaume} alt="" />
    </div>
    );
}

export default Header;