import PropTypes from "prop-types";
import AnimationButton from "./AnimationButton";

export default function ClickEffect({
  dataName,
  goodAnswer,
  setPoints,
  points,
  setQuestion,
}) {
  return (
    <AnimationButton
      dataName={dataName}
      goodAnswer={goodAnswer}
      setPoints={setPoints}
      points={points}
      setQuestion={setQuestion}
    />
  );
}

ClickEffect.propTypes = {
  dataName: PropTypes.string.isRequired,
  goodAnswer: PropTypes.string.isRequired,
  setPoints: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  setQuestion: PropTypes.func.isRequired,
};
