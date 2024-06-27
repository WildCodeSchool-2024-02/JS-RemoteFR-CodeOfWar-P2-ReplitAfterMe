import axios from "axios";
import { useEffect, useState } from "react";

import avatar from "../assets/images/avatar.png";
import atout from "../assets/images/atout.png";
import Question from "./Question";

export default function Quizz() {
  const [data, setData] = useState([]);

  const countryData = () => {
    // Send the request
    axios
      .get(
        "https://restcountries.com/v3.1/name/france?fields=flags,capital,languages,name,"
      )
      // Use this data to update the state
      .then((response) => {
        setData(response.data[0]);
      });
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <>
      <header className="header">
        <img src={avatar} alt="avatar de profil" />
        <button type="button">0 PTS</button>
      </header>
      {data.length === 0 ? " " : <Question data={data} />}
      <footer className="Footer">
        <img src={atout} alt="utilisation d'un atout pour le quizz" />
      </footer>
    </>
  );
}
