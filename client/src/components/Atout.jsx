import PropTypes from "prop-types";

export default function Atout({
  name,
  image,
  imageAlt,
  bonus,
  setBonus,
  setQuestion,
  call,
  setArray,
}) {
  const handleClick = () => {
    if (name === "Double") {
      setBonus(bonus + 1000);
    } else if (name === "Change Question") {
      setQuestion();
    } else if (name === "Call") {
      call();
    } else if (name === "50/50") {
      setArray();
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      <img src={image} alt={imageAlt} />;
    </button>
  );
}
Atout.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  bonus: PropTypes.number.isRequired,
  setBonus: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setArray: PropTypes.func.isRequired,
  call: PropTypes.func.isRequired,
};
