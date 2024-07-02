import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "../style/quizz.css";
import avatar from "../assets/images/avatar.png";
import atout from "../assets/images/atout.png";
import Question from "./Question";
import ClickEffect from "./ClickEffect";

function Quizz() {
  const [points, setPoints] = useState(0);

  const data = useLoaderData();

  console.info(data);

  // load new array with 4 answers
  const answerArray = [];
  for (let i = 0; i < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedItem = data.splice(randomIndex, 1)[0];
    console.info(selectedItem);
    answerArray.push(selectedItem);
  }
  console.info(answerArray);
  // replace number
  const goodAnswer = Math.floor(Math.random() * 4);

  console.info(goodAnswer);

  // answerArray with only name or flag
  const dataName = answerArray.map((answer) => answer.name.common);
  console.info(dataName);
  const dataFlags = answerArray.map((answer) => answer.flags.svg);
  console.info(dataFlags);
  const dataAlt = answerArray.map((answer) => answer.flags.alt);

  return (
    <>
      <header className="header">
        <img src={avatar} alt="avatar de profil" />
        <button type="button">{points} pts</button>
      </header>

      <Question
        dataFlags={dataFlags[goodAnswer]}
        dataAlt={dataAlt[goodAnswer]}
      />

      {dataName.map((country) => (
        <ClickEffect
          key={country}
          dataName={country}
          goodAnswer={goodAnswer}
          setPoints={setPoints}
          points={points}
        />
      ))}

      <footer className="footer">
        <img src={atout} alt="utilisation d'un atout pour le quizz" />
      </footer>
    </>
  );
}

export default Quizz;
