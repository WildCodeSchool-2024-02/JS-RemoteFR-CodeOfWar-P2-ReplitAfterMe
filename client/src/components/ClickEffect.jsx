import PropTypes from "prop-types";
import AnimationButton from "./AnimationButton";

export default function ClickEffect({ dataName }) {
  const goodAnswer = dataName[0];
  console.info(goodAnswer);
  return (
    <div className="answers-class1">
      <div className="answers">
        <AnimationButton dataName={dataName[0]} goodAnswer={goodAnswer} />
        <AnimationButton dataName={dataName[1]} goodAnswer={goodAnswer} />
      </div>
      <div className="answers">
        <AnimationButton dataName={dataName[2]} goodAnswer={goodAnswer} />
        <AnimationButton dataName={dataName[3]} goodAnswer={goodAnswer} />
      </div>
    </div>
  );
}

ClickEffect.propTypes = {
  dataName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
