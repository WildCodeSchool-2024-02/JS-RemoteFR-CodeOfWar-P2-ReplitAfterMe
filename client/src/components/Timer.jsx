import { useState, useEffect } from "react";
import "../style/timer.css";
import PropTypes from "prop-types";

export default function Timer({
  seconds,
  setSeconds,
  setQuestion,
  points,
  setPoints,
  setNumQuestion,
  numQuestion,
  toggleTimerOut,
  isActive,
  setIsActive,
  timerOut,
}) {
  const [endTimer, setEndTimer] = useState("time");

  useEffect(() => {
    if (seconds <= 7) {
      setEndTimer("time end-time");
    } else {
      setEndTimer("time");
    }
  }, [seconds]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0 && !timerOut) {
      toggleTimerOut();
      setIsActive(false);
      setPoints(points + 0);
      setNumQuestion(numQuestion + 1);
    }

    return () => clearInterval(interval);
  }, [
    isActive,
    seconds,
    setSeconds,
    points,
    setPoints,
    numQuestion,
    setQuestion,
    setNumQuestion,
    setIsActive,
    toggleTimerOut,
    timerOut,
  ]);

  return (
    <div className="timer">
      <div className={endTimer}>{seconds - 2}</div>
    </div>
  );
}
Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  setSeconds: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setPoints: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  setNumQuestion: PropTypes.func.isRequired,
  numQuestion: PropTypes.number.isRequired,
  toggleTimerOut: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  timerOut: PropTypes.bool.isRequired,
};
