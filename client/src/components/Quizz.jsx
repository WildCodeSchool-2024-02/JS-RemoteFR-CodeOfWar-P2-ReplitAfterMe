import { useState, useEffect, useCallback, useRef, useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useDifficulty } from "../../contexts/DifficultyContext";

import { ChapterContext } from "../contexts/ChapterContext";

import "../style/quizz.css";

import avatar from "../assets/images/avatar.png";
import atouts from "../data/atout";

import Question from "./Question";
import Atout from "./Atout";
import Timer from "./Timer";
import AnswerButton from "./AnswerButton";
import PopUp from "./PopUp";

function Quizz() {
  const [points, setPoints] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const [goodAnswer, setGoodAnswer] = useState(null);
  const [numQuestion, setNumQuestion] = useState(0);
  const { seconds, setSeconds } = useDifficulty();
  const [bonus, setBonus] = useState(0);
  const [popUP, setPopUp] = useState(false);
  const { chapter, setChapter } = useContext(ChapterContext);
  const [disable, setDisable] = useState(false);
  const [answerClass, setAnswerClass] = useState("button");
  const [randomAnswer, setRandomAnswer] = useState(null);

  const data = useLoaderData();
  const maxQuestions = 10;

  const togglePopup = () => {
    setPopUp(!popUP);
  };

  const secondsRef = useRef(seconds);

  const setQuestion = useCallback(() => {
    const nextAnswerArray = [];
    for (let i = 0; i < 4; i += 1) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedItem = data.splice(randomIndex, 1)[0];
      nextAnswerArray.push(selectedItem);
    }
    const nextGoodAnswer =
      nextAnswerArray[Math.floor(Math.random() * nextAnswerArray.length)];
    setAnswerArray(nextAnswerArray);
    setGoodAnswer(nextGoodAnswer);
    setSeconds(secondsRef.current);
  }, [data, setSeconds]);

  useEffect(() => {
    setQuestion();
  }, [setQuestion]);

  const setArray = () => {
    const reduceAnswerArray = [];
    let secondAnswer;
    do {
      secondAnswer =
        answerArray[Math.floor(Math.random() * answerArray.length)];
    } while (secondAnswer === goodAnswer);
    reduceAnswerArray.push(goodAnswer, secondAnswer);
    setAnswerArray(reduceAnswerArray);
  };

  const call = () => {
    const random = Math.random();
    if (random <= 0.75) {
      setRandomAnswer(goodAnswer.translations.fra.common);
    } else {
      setRandomAnswer(
        answerArray[Math.floor(Math.random() * answerArray.length)].translations
          .fra.common
      );
    }
  };

  console.info(chapter);
  if (numQuestion >= maxQuestions) {
    if (points >= 5000) {
      return (
        <div>
          Vous avez obtenu : {points} points ! Le fugitif est tout proche...
          <Link to="/story">
            <button type="button">Chapitre suivant</button>
          </Link>
          <Link to="/">
            <button type="button" onClick={() => setChapter(chapter + 1)}>
              Retourner à l'accueil
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div>
        Vous avez obtenu : {points} points... Le fugitif s'est enfui.
        <Link reloadDocument to={`/quizz/${chapter}`}>
          <button type="button">Recommencer</button>
        </Link>
        <Link to="/">
          <button type="button">Retourner à l'accueil</button>
        </Link>
      </div>
    );
  }

  if (!goodAnswer) {
    return "";
  }

  return (
    <main className="quizz-container">
      <header className="header">
        <div aria-hidden="true" onClick={togglePopup}>
          <img src={avatar} alt="avatar de profil" />
        </div>
        <button type="button">{points} pts</button>
      </header>
      <Question
        dataFlags={goodAnswer.flags.svg}
        dataAlt={goodAnswer.flags.alt}
        numQuestion={numQuestion}
        maxQuestions={maxQuestions}
      />

      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        setPoints={setPoints}
        points={points}
        setQuestion={setQuestion}
      />
      <div className="answer-div">
        {answerArray.map((country) => (
          <AnswerButton
            key={country.translations.fra.common}
            dataName={country.translations.fra.common}
            goodAnswer={goodAnswer.translations.fra.common}
            setPoints={setPoints}
            points={points}
            setQuestion={setQuestion}
            setNumQuestion={setNumQuestion}
            numQuestion={numQuestion}
            bonus={bonus}
            setBonus={setBonus}
            randomAnswer={randomAnswer}
            disable={disable}
            setDisable={setDisable}
            answerClass={answerClass}
            setAnswerClass={setAnswerClass}
          />
        ))}
      </div>
      {popUP && <PopUp handleClose={togglePopup} />}
      <footer className="footer">
        {atouts.map((atout) => (
          <Atout
            key={atout.name}
            name={atout.name}
            image={atout.img.src}
            imageAlt={atout.img.alt}
            bonus={bonus}
            setBonus={setBonus}
            setQuestion={setQuestion}
            setArray={setArray}
            call={call}
          />
        ))}
      </footer>
    </main>
  );
}
export default Quizz;
