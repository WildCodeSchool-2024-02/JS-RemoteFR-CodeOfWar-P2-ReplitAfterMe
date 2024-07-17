import { useState, useEffect } from "react";
import "../style/timer.css";
import PropTypes from "prop-types";

export default function Timer({
  seconds,
  setSeconds,
  setQuestion,
  points,
  setPoints,
}) {
  const [isActive, setIsActive] = useState(true);
  const [endTimer, setEndTimer] = useState("time");

  useEffect(() => {
    if (seconds <= 5) {
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

    if (seconds === 0) {
      setIsActive(false);
      setPoints(points + 0);
      setQuestion();
    } else {
      setIsActive(true);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, setSeconds, points, setPoints, setQuestion]);

  return (
    <div className="timer">
      <div className={endTimer}>{seconds}</div>
    </div>
  );
}
Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  setSeconds: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setPoints: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
};
