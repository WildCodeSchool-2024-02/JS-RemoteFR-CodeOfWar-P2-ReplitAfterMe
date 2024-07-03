import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style/popUp.css";

export default function PopUp({ content, handleClose }) {
  return (
    <div className="overlay">
      <div className="popup-content">
        <h2>Quitter</h2>
        <p>Êtes vous sur de vouloir retourner au menu?</p>
        <div className="icone">
          <Link to="/" className="popup-links" onClick={handleClose}>
            &#x1F5F8;
          </Link>
          <button
            onClick={handleClose}
            className="close-button"
            type="button"
            // aria-label="Fermer"
          >
            &#x1F5F6;
          </button>
          {content}
        </div>
      </div>
    </div>
  );
}
PopUp.propTypes = {
  content: PropTypes.bool.isRequired, // node
  handleClose: PropTypes.func.isRequired,
};
