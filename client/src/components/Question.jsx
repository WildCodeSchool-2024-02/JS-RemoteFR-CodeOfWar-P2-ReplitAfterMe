import PropTypes from "prop-types";

export default function Question({ data }) {
  return (
    <>
      <div className="question">
        <img src={data.flags.svg} alt="" />
        <p>À quel pays appartient ce drapeau ?</p>
      </div>
      <div className="chapitre">
        <p>Chapitre 1, question 1/10</p>
      </div>
    </>
  );
}

Question.propTypes = {
  data: PropTypes.shape({
    flags: PropTypes.shape({
      svg: PropTypes.string,
    }),
  }).isRequired,
};
