import PropTypes from "prop-types";
import AnimationButton from "./AnimationButton";

export default function ClickEffect({ handleAnswerClick }) {
  return (
    <div className="answers-class1">
      <div className="answers">
        <AnimationButton
          label="Réponse 1"
          onClick={() => handleAnswerClick("Réponse 1")}
        />
        <AnimationButton
          label="Réponse 2"
          onClick={() => handleAnswerClick("Réponse 2")}
        />
      </div>
      <div className="answers">
        <AnimationButton
          label="Réponse 3"
          onClick={() => handleAnswerClick("Réponse 3")}
        />
        <AnimationButton
          label="Réponse 4"
          onClick={() => handleAnswerClick("Réponse 4")}
        />
      </div>
    </div>
  );
}

ClickEffect.propTypes = {
  handleAnswerClick: PropTypes.func.isRequired,
};
