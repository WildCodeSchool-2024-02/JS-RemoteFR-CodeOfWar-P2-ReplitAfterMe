import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../style/buttonBlood.css";

export default function AnswerButton({
  dataName,
  goodAnswer,
  setPoints,
  points,
  setQuestion,
  setNumQuestion,
  numQuestion,
  bonus,
  setBonus,
  randomAnswer,
  disable,
  setDisable,
  answerClass,
  setAnswerClass,
}) {
  const [showImage, setShowImage] = useState(false);
  const [className, setClassName] = useState("button");

  useEffect(() => {
    if (randomAnswer === dataName) {
      setClassName("orange-button");
    }
  }, [randomAnswer, dataName]);

  useEffect(() => {
    if (goodAnswer === dataName && className !== "greenButton") {
      setClassName(answerClass);
    }
  }, [answerClass, goodAnswer, dataName, className]);

  const handleClick = () => {
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
    }, 1000);
    setDisable(!disable);

    if (dataName === goodAnswer) {
      setClassName("greenButton");
      setPoints(points + 1000 + bonus);
      setTimeout(() => {
        setBonus(0);
        setQuestion();
        setDisable(disable);
        setNumQuestion(numQuestion + 1);
      }, 2000);
    } else {
      setClassName("redButton");
      setAnswerClass("greenButton");
      setTimeout(() => {
        setQuestion();
        setBonus(0);
        setAnswerClass("button");
        setDisable(disable);
        setNumQuestion(numQuestion + 1);
      }, 2000);
    }
  };

  // useEffect(() =>{
  //   if (goodAnswer === dataName) {
  //     setClassName("green-button");
  //   }},[handleClick, dataName, goodAnswer])

  return (
    <div className="animation-button">
      <button
        className={className}
        type="button"
        onClick={handleClick}
        disabled={disable}
      >
        {dataName}
      </button>
      {showImage && (
        <motion.img
          className="animation-image"
          src="https://img1.picmix.com/output/stamp/normal/2/8/5/7/877582_dea0b.png"
          alt="Feedback"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}

AnswerButton.defaultProps = {
  randomAnswer: PropTypes.null,
};

AnswerButton.propTypes = {
  dataName: PropTypes.string.isRequired,
  goodAnswer: PropTypes.string.isRequired,
  setPoints: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setNumQuestion: PropTypes.func.isRequired,
  numQuestion: PropTypes.number.isRequired,
  bonus: PropTypes.number.isRequired,
  setBonus: PropTypes.func.isRequired,
  randomAnswer: PropTypes.string,
  disable: PropTypes.bool.isRequired,
  setDisable: PropTypes.func.isRequired,
  answerClass: PropTypes.string.isRequired,
  setAnswerClass: PropTypes.func.isRequired,
};
