import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style/popUp.css";

export default function PopUp({ handleClose }) {
  return (
    <div className="overlay">
      <div className="popup-content">
        <h2>Quitter</h2>
        <p>Êtes vous sur de vouloir retourner au menu?</p>
        <div className="icone">
          <Link to="/" className="popup-links" onClick={handleClose}>
            &#x1F5F8;
          </Link>
          <button onClick={handleClose} className="close-button" type="button">
            &#x1F5F6;
          </button>
        </div>
      </div>
    </div>
  );
}
PopUp.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
