import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../style/intro.css";

export default function Rain({ count }) {
  const [raindrops, setRaindrops] = useState([]);
  useEffect(() => {
    const drops = Array.from({ length: count }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}vw`,
      duration: `${Math.random() * 1 + 0.5}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setRaindrops(drops);
  }, [count]);

  return (
    <>
      <div className="rain-background" />
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: drop.left,
            animationDuration: drop.duration,
            animationDelay: drop.delay,
          }}
        />
      ))}
    </>
  );
}

Rain.propTypes = {
  count: PropTypes.number.isRequired,
};
