import PropTypes from "prop-types";

export default function Atout({
  name,
  image,
  imageAlt,
  fonction,
  bonus,
  setBonus,
}) {
  const handleClick = () => {
    if (name === "Double") {
      setBonus(bonus + 1000);
    }
  };
  return (
    <>
      {console.info(fonction)}
      <button type="button" onClick={handleClick}>
        <img src={image} alt={imageAlt} />;
      </button>
    </>
  );
}
Atout.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  fonction: PropTypes.func.isRequired,
  bonus: PropTypes.number.isRequired,
  setBonus: PropTypes.func.isRequired,
};
