import { Link } from "react-router-dom";
import { useState } from "react";

import "../style/homePage.css";
import Options from "../pages/Options";

export default function HomePage() {
  const [seen, setSeen] = useState(false);

  const handleClickPopUp = () => {
    setSeen(!seen);
  };

  return (
    <main className="home-container">
      {seen && <Options handleClickPopUp={handleClickPopUp} />}
      <div className="titleHome">
        <h1>Geo Quest</h1>
      </div>
      <div className="linksContainer">
        <ul className="links">
          <li>
            <Link to="/quizz/chapter:chapter" className="play">
              JOUER
            </Link>
          </li>
          <div className="option">
            <li>
              <div aria-hidden="true" className="linksHome">
                Histoire
              </div>
            </li>
            <li>
              <div
                aria-hidden="true"
                onClick={handleClickPopUp}
                className="linksHome"
              >
                Options
              </div>
            </li>
          </div>
        </ul>
      </div>
    </main>
  );
}
