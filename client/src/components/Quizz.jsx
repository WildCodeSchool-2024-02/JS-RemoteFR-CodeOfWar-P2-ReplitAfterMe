import { useState, useEffect, useCallback, useRef, useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useDifficulty } from "../../contexts/DifficultyContext";

import { ChapterContext } from "../contexts/ChapterContext";

import "../style/quizz.css";

import avatar from "../assets/images/avatar.png";
import atouts from "../data/atout";
import Kpes from "../assets/images/Kpes.png";

import videoBg from "../assets/Cloud.mp4";

import Question from "./Question";
import Atout from "./Atout";
import Timer from "./Timer";
import AnswerButton from "./AnswerButton";
import PopUp from "./PopUp";
import PopUpNextQuestion from "./PopUpNextQuestion";

function Quizz() {
  const [points, setPoints] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const [goodAnswer, setGoodAnswer] = useState(null);
  const [numQuestion, setNumQuestion] = useState(0);
  const { seconds, setSeconds } = useDifficulty();
  const [bonus, setBonus] = useState(0);
  const [popUP, setPopUp] = useState(false);
  const [timerOut, setTimerOut] = useState(false);
  const { chapter } = useContext(ChapterContext);
  const [disable, setDisable] = useState(false);
  const [answerClass, setAnswerClass] = useState("button");
  const [randomAnswer, setRandomAnswer] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("last-none");

  const data = useLoaderData();
  const maxQuestions = 10;

  const togglePopup = () => {
    setPopUp(!popUP);
  };

  const toggleTimerOut = () => {
    setTimerOut(!timerOut);
  };

  const secondsRef = useRef(seconds);

  const setQuestion = useCallback(() => {
    if (data !== null) {
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
    }
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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCoupableClick = () => {
    const lowerInputValue = inputValue.toLocaleLowerCase();
    if (lowerInputValue === "kevin" || lowerInputValue === "kevin peset") {
      setMessage(
        "Le meurtrier est enfin sous les verrous ! Bravo ! J'espère que tu as apprécié le voyage !"
      );
      setDisplay("last");
    } else {
      setMessage("Perdu, relie l'histoire");
    }
  };

  if (!data) {
    return (
      <main className="main-end-chapter">
        <div className="mystery">
          <h3 className="title-end-screen">
            L'enquête touche à sa fin... Alors, qui est le coupable ?
          </h3>
          <Link to="/">
            <button className="boutton-end-quizz" type="button">
              {" "}
              Chercher des indices
            </button>
          </Link>
          <label htmlFor="coupable">
            <p className="game-status">je pense qu'il s'agit de :</p>
          </label>{" "}
          <input
            className="input-text"
            type="text"
            id="coupable"
            name="coupable"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="boutton-end-quizz"
            type="button"
            onClick={handleCoupableClick}
          >
            Envoyer
          </button>
          <p className="game-status">{message}</p>
          <div className={display}>
            <img
              className="killer"
              src={Kpes}
              alt="Le dangereux meurtrier muni d'une perruque"
            />
            <Link to="/">
              <button className="boutton-end-quizz" type="button">
                Retourner au menu
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (numQuestion >= maxQuestions) {
    if (points >= 5000) {
      return (
        <main className="main-end-chapter">
          <div className="end-chapter-quizz">
            <div>
              <h2 className="number-points">
                Vous avez obtenu : {points} points !
              </h2>
              <p className="game-status"> Le fugitif est tout proche...</p>
            </div>
            <div>
              <Link to="/story">
                <button className="boutton-end-quizz" type="button">
                  Chapitre suivant
                </button>
              </Link>
            </div>
          </div>
        </main>
      );
    }
    console.info(numQuestion);
    return (
      <main className="main-end-chapter">
        <div className="end-chapter-quizz">
          <div>
            <h2 className="number-points">
              Vous avez obtenu : {points} points...
            </h2>
            <p className="game-status">Le fugitif s'est enfui.</p>
          </div>
          <div>
            <Link to="/">
              <button className="boutton-end-quizz" type="button">
                Accueil
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!goodAnswer) {
    return "";
  }
  if (chapter <= 4) {
    return (
      <>
        <video src={videoBg} autoPlay muted loop className="video" />
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
            setNumQuestion={setNumQuestion}
            numQuestion={numQuestion}
            toggleTimerOut={toggleTimerOut}
            isActive={isActive}
            setIsActive={setIsActive}
            timerOut={timerOut}
          />
          {timerOut && (
            <PopUpNextQuestion
              goodAnswer={goodAnswer.translations.fra.common}
              setQuestion={setQuestion}
              toggleTimerOut={toggleTimerOut}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          )}
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
      </>
    );
  }
  return (
    <>
      <video src={videoBg} autoPlay muted loop className="video" />
      <main className="quizz-container">
        <header className="header">
          <div aria-hidden="true" onClick={togglePopup}>
            <img src={avatar} alt="avatar de profil" />
          </div>
          <button type="button">{points} pts</button>
        </header>
        <Question
          dataFlags={goodAnswer.capital}
          dataAlt={goodAnswer.capital}
          numQuestion={numQuestion}
          maxQuestions={maxQuestions}
        />

        <Timer
          seconds={seconds}
          setSeconds={setSeconds}
          setPoints={setPoints}
          points={points}
          setQuestion={setQuestion}
          setNumQuestion={setNumQuestion}
          numQuestion={numQuestion}
          toggleTimerOut={toggleTimerOut}
          isActive={isActive}
          setIsActive={setIsActive}
          timerOut={timerOut}
        />
        {timerOut && (
          <PopUpNextQuestion
            goodAnswer={goodAnswer.translations.fra.common}
            setQuestion={setQuestion}
            toggleTimerOut={toggleTimerOut}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        )}

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
    </>
  );
}
export default Quizz;
