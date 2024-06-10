import { ReactDOM, useEffect, useState } from "react";
import Footer from "./include/footer";
import Header from "./include/header";
import Quote from "./include/quote";
import HouseText from "./include/houseText";
import Search from "./include/search";
import bg from "../img/doctor.webp";
import "./home.css";



function Home() {
  let [d, setD] = useState({ a: "10%", b: "-5%", c: "12%" });
  let [doo, setDoo] = useState(true);
  window.addEventListener("resize", () => {
    setDoo(!doo);
  });
  useEffect(() => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const elem = document.querySelector(".home");
    if (aspectRatio > 1) {
      setD({ a: "10%", b: "-5%", c: "12%" });
    } else {
      setD({ a: "17%", b: "25%", c: "12%" });
    }
  }, [doo]);

  return (
    <div
      className="home"
      style={{
        "--top_quote": d.a,
        "--top_house": d.b,
        "--bottom_search": d.c,
      }}
    >
      <div className="bg-container">
        <img className="bg" src={bg} alt="" />
      </div>
      <div className="main">
        <Header />
        <Quote />
        <HouseText />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
