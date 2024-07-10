import PropTypes from "prop-types";

export default function Atout({ image, imageAlt, fonction }) {
  return (
    <>
      {console.info(fonction)}
      <button type="button" onClick={fonction}>
        <img src={image} alt={imageAlt} />;
      </button>
    </>
  );
}
Atout.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  fonction: PropTypes.func.isRequired,
};
