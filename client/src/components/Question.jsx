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

  if (chapter <= 4) {
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
  return (
    <>
      <div className="question">
        <img
          src="https://www.ericgamble.com/wp-content/uploads/2020/06/View-from-Willis-Tower-Skydeck-Chicago-United-States.jpg"
          alt="ville remplie de grattes-ciel avec la mer en arrière plan"
        />
        <p>De quel pays {dataFlags} est la capitale ?</p>
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
