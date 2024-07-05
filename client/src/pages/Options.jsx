import PropTypes from "prop-types";
import AudioPlayer from "../components/AudioPlayer";

import "../style/options.css";

export default function Options({ handleClickPopUp }) {
  return (
    <div className="blur">
      <div className="popUp">
        <div className="buttonPop">
          <button onClick={handleClickPopUp} type="button">
            X
          </button>
        </div>
        <div>
          <h1>Options</h1>
        </div>
        <ul>
          <li>Avatar</li>
          <li>Difficultés</li>
          <li>Son</li>
        </ul>
        <div className="componentsPop">
          <p>Avatar</p>
          <p>difficulté</p>
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
}

Options.propTypes = {
  handleClickPopUp: PropTypes.func.isRequired,
};
