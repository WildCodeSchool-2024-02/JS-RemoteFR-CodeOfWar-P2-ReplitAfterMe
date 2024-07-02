import PropTypes from "prop-types";

import "../style/question.css";

export default function Question({ dataFlags }) {
  console.info(dataFlags);
  return (
    <>
      <div className="question">
        <img src={dataFlags[0]} alt="" />
        <p>À quel pays appartient ce drapeau ?</p>
      </div>
      <div className="chapitre">
        <p>Chapitre 1, question 1/10</p>
      </div>
    </>
  );
}

Question.propTypes = {
  dataFlags: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      svg: PropTypes.string.isRequired,
      png: PropTypes.string.isRequired,
    })
  ).isRequired,
};
