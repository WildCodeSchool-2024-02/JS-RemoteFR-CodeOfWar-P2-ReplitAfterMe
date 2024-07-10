import { useState, useEffect } from "react";
import "../style/timer.css";
import PropTypes from "prop-types";

export default function Timer({ seconds, setSeconds }) {
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
    } else {
      setIsActive(true);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, setSeconds]);

  return (
    <div className="timer">
      <div className="time">{seconds}s</div>
      <input
        type="range"
        min="0"
        max="10"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
    </div>
  );
}
Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  setSeconds: PropTypes.func.isRequired,
};
