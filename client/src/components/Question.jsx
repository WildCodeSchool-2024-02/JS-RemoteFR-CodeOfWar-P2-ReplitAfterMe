import PropTypes from "prop-types";

import "../style/question.css";

export default function Question({ dataAlt, dataFlags }) {
  console.info(dataFlags);
  return (
    <>
      <div className="question">
        <img src={dataFlags} alt={dataAlt} />
        <p>À quel pays appartient ce drapeau ?</p>
      </div>
      <div className="chapitre">
        <p>Chapitre 1, question 1/10</p>
      </div>
    </>
  );
}

Question.propTypes = {
  dataAlt: PropTypes.string.isRequired,
  dataFlags: PropTypes.string.isRequired,
};
