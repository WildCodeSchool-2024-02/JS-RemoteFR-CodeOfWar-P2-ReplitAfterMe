import PropTypes from "prop-types";
import AnimationButton from "./AnimationButton";

export default function ClickEffect({
  dataName,
  goodAnswer,
  setPoints,
  points,
}) {
  return (
    <div className="answers-class1">
      <div className="answers">
        <AnimationButton
          dataName={dataName[0]}
          goodAnswer={goodAnswer}
          setPoints={setPoints}
          points={points}
        />
        <AnimationButton
          dataName={dataName[1]}
          goodAnswer={goodAnswer}
          setPoints={setPoints}
          points={points}
        />
      </div>
      <div className="answers">
        <AnimationButton
          dataName={dataName[2]}
          goodAnswer={goodAnswer}
          setPoints={setPoints}
          points={points}
        />
        <AnimationButton
          dataName={dataName[3]}
          goodAnswer={goodAnswer}
          setPoints={setPoints}
          points={points}
        />
      </div>
    </div>
  );
}

ClickEffect.propTypes = {
  dataName: PropTypes.arrayOf(PropTypes.string).isRequired,
  goodAnswer: PropTypes.string.isRequired,
  setPoints: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
};
