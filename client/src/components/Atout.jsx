import PropTypes from "prop-types";

export default function Atout({ image }) {
  return <img src={image} alt="" />;
}
Atout.propTypes = {
  image: PropTypes.string.isRequired,
};
