import { useState } from "react";
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
}) {
  const [showImage, setShowImage] = useState(false);
  const [className, setClassName] = useState("button");

  const handleClick = () => {
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
    }, 1000);
    if (dataName === goodAnswer) {
      setClassName("greenButton");
      setPoints(points + 1000 + bonus);
      setTimeout(() => {
        setBonus(0);
        setQuestion();
        setNumQuestion(numQuestion + 1);
      }, 2000);
    } else {
      setClassName("redButton");
      setTimeout(() => {
        setQuestion();
        setBonus(0);
        setNumQuestion(numQuestion + 1);
      }, 2000);
    }
  };

  return (
    <div className="animation-button">
      <button className={className} type="button" onClick={handleClick}>
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
};