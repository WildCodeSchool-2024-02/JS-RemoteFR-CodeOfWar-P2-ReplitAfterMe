import { useContext } from "react";
import PropTypes from "prop-types";
import { ChapterContext } from "../contexts/ChapterContext";

import "../style/question.css";

export default function Question({
  dataAlt,
  dataFlags,
  numQuestion,
  maxQuestions,
}) {
  const { chapter } = useContext(ChapterContext);

  return (
    <>
      <div className="question">
        <img src={dataFlags} alt={dataAlt} />
        <p>À quel pays appartient ce drapeau ?</p>
      </div>
      <div className="chapitre">
        <p>
          Chapitre {chapter + 1}, question {numQuestion + 1}/{maxQuestions}
        </p>
      </div>
    </>
  );
}

Question.propTypes = {
  dataAlt: PropTypes.string.isRequired,
  dataFlags: PropTypes.string.isRequired,
  numQuestion: PropTypes.number.isRequired,
  maxQuestions: PropTypes.number.isRequired,
};
