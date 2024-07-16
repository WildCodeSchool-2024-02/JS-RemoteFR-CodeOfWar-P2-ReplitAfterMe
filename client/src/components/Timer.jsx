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
      <div className="time">{seconds}</div>
      <input
        className="timer-input"
        type="range"
        max="30"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
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
