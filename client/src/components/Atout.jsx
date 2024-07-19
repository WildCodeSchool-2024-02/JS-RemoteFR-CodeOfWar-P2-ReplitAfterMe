import PropTypes from "prop-types";
import "../style/atout.css";
import { useState } from "react";

export default function Atout({
  name,
  image,
  imageAlt,
  bonus,
  setBonus,
  setQuestion,
  call,
  setArray,
}) {
  const [hidden, setHidden] = useState(false);
  const [opacity, setOpacity] = useState("button-atout");

  const hiddenAssets = () => {
    setHidden(true);
  };

  const changeOpacity = () => {
    setOpacity("button-atout opacity");
  };

  const handleClick = () => {
    if (name === "Double") {
      setBonus(bonus + 1000);
    } else if (name === "Change Question") {
      setQuestion();
    } else if (name === "Call") {
      call();
    } else if (name === "50/50") {
      setArray();
    }
  };

  return (
    <button
      className={opacity}
      type="button"
      disabled={hidden}
      onClick={function fn() {
        handleClick();
        hiddenAssets();
        changeOpacity();
      }}
    >
      <img src={image} alt={imageAlt} className="img-atout" />
    </button>
  );
}
Atout.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  bonus: PropTypes.number.isRequired,
  setBonus: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setArray: PropTypes.func.isRequired,
  call: PropTypes.func.isRequired,
};
