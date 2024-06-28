import PropTypes from "prop-types";
import AnimationButton from "./AnimationButton";

export default function ClickEffect({ dataName }) {
  return (
    <div className="answers-class1">
      <div className="answers">
        <AnimationButton dataName={dataName[0]} label="Réponse 1" />
        <AnimationButton dataName={dataName[1]} label="Réponse 2" />
      </div>
      <div className="answers">
        <AnimationButton dataName={dataName[2]} label="Réponse 3" />
        <AnimationButton dataName={dataName[3]} label="Réponse 4" />
      </div>
    </div>
  );
}

ClickEffect.propTypes = {
  dataName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
