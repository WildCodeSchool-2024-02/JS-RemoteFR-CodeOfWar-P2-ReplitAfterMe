import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "../style/quizz.css";
import avatar from "../assets/images/avatar.png";
import atout from "../assets/images/atout.png";
import Question from "./Question";
import ClickEffect from "./ClickEffect";
import PopUp from "./PopUp";

function Quizz() {
  const [points, setPoints] = useState(0);

  const data = useLoaderData();
  const [popUP, setPopUp] = useState(false);

  const togglePopup = () => {
    setPopUp(!popUP);
  };

  // load new array with 4 answers
  const answerArray = [];
  for (let i = 0; i < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedItem = data.splice(randomIndex, 1)[0];
    answerArray.push(selectedItem);
  }

  // replace number
  const goodAnswer =
    answerArray[Math.floor(Math.random() * answerArray.length)];

  // answerArray with only name
  const dataName = answerArray.map((answer) => answer.name.common);

  return (
    <>
      <header className="header">
        <div aria-hidden="true" onClick={togglePopup}>
          <img src={avatar} alt="avatar de profil" />
        </div>
        <button type="button">{points} pts</button>
      </header>

      <Question
        dataFlags={goodAnswer.flags.svg}
        dataAlt={goodAnswer.flags.alt}
      />

      {dataName.map((country) => (
        <ClickEffect
          key={country}
          dataName={country}
          goodAnswer={goodAnswer.name.common}
          setPoints={setPoints}
          points={points}
        />
      ))}
      {popUP && <PopUp handleClose={togglePopup} />}
      <footer className="footer">
        <img src={atout} alt="utilisation d'un atout pour le quizz" />
      </footer>
    </>
  );
}
export default Quizz;
