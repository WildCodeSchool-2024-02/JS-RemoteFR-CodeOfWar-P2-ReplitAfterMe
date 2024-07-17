import PropTypes from "prop-types";
import AudioPlayer from "../components/AudioPlayer";
import Difficulty from "../components/Difficulty";

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
          <li className="options-choice">Avatar</li>
          <p>Avatar</p>
          <li className="options-choice">Difficultés</li>
          <Difficulty />
          <li className="options-choice">Son</li>
          <AudioPlayer />
        </ul>
      </div>
    </div>
  );
}

Options.propTypes = {
  handleClickPopUp: PropTypes.func.isRequired,
};
