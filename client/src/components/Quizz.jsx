import axios from "axios";
import { useEffect, useState } from "react";

import "../style/quizz.css";
import avatar from "../assets/images/avatar.png";
import atout from "../assets/images/atout.png";
import Question from "./Question";
import ClickEffect from "./ClickEffect";

function Quizz() {
  const [data, setData] = useState([]);

  const [points, setPoints] = useState(0);

  const countryData = () => {
    // Send the request
    axios
      .get(
        "https://restcountries.com/v3.1/region/europe?fields=flags,name,cca3"
      )
      // Use this data to update the state
      .then((response) => {
        setData(response.data);
      });
  };

  console.info(data);

  const number = Math.floor(Math.random(0, data.length) * data.length);
  const dataName = data.map((d) => d.name.common);
  const dataFlags = data.map((d) => d.flags.svg);

  const answerArray = [];
  for (let i = 0; i < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedItem = data.splice(randomIndex, 1)[0];
    console.info(selectedItem);
    answerArray.push(selectedItem);
  }
  console.info(answerArray);

  const goodAnswer = answerArray[Math.floor(Math.random() * 4)];

  console.info(goodAnswer);

  useEffect(() => {
    countryData();
  }, []);

  return (
    <>
      <header className="header">
        <img src={avatar} alt="avatar de profil" />
        <button type="button">{points} pts</button>
      </header>
      {data.length === 0 ? (
        " "
      ) : (
        <Question
          dataFlags={dataFlags}
          goodAnswer={goodAnswer}
          data={data}
          number={number}
        />
      )}
      <ClickEffect
        dataName={dataName}
        goodAnswer={goodAnswer}
        setPoints={setPoints}
        points={points}
      />

      <footer className="footer">
        <img src={atout} alt="utilisation d'un atout pour le quizz" />
      </footer>
    </>
  );
}

export default Quizz;
