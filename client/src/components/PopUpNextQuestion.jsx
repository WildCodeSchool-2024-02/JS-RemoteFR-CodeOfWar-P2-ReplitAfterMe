import PropTypes from "prop-types";

import detective from "../assets/images/detective-2.png";

import "../style/popUpNextQuestion.css";

export default function PopUpNextQuestion({
  goodAnswer,
  setQuestion,
  toggleTimerOut,
  setIsActive,
}) {
  return (
    <div className="PopUpNextQuestion">
      <div className="custom-shape-divider-top-1721296208">
        <p>le tueur s'éloigne un peu plus ...</p>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="shape-fill"
          />
        </svg>
      </div>
      <img src={detective} alt="detective" />
      <p>
        La bonne réponse était <span>{goodAnswer}</span>
      </p>
      <button
        type="button"
        onClick={() => {
          setQuestion();
          toggleTimerOut();
          setIsActive(true);
        }}
      >
        Question suivante
      </button>
    </div>
  );
}
PopUpNextQuestion.propTypes = {
  setQuestion: PropTypes.func.isRequired,
  toggleTimerOut: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
  goodAnswer: PropTypes.string.isRequired,
};
