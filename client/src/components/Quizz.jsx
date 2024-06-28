import axios from "axios";
import { useEffect, useState } from "react";

import "../style/quizz.css";
import avatar from "../assets/images/avatar.png";
import atout from "../assets/images/atout.png";
import Question from "./Question";
import ClickEffect from "./ClickEffect";

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

  const handleAnswerClick = (answer) => {
    console.info(`Réponse cliquée: ${answer}`);
  };

  return (
    <>
      <header className="header">
        <img src={avatar} alt="avatar de profil" />
        <button type="button">5000 pts</button>
      </header>
      {data.length === 0 ? " " : <Question data={data} />}
      <ClickEffect handleAnswerClick={handleAnswerClick} />
      <footer className="footer">
        <img src={atout} alt="utilisation d'un atout pour le quizz" />
      </footer>
    </>
  );
}
