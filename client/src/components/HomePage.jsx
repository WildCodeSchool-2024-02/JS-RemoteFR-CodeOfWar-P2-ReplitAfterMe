import "../style/homePage.css";

function HomePage() {
  return (
    <div>
      <div className="TitleHome">
        <h1>Geo Quest</h1>
      </div>
      <div className="LinksContainer">
        <ul className="Links">
          <li>
            <a href="quizz" className="Play">
              Jouer
            </a>
          </li>
          <div className="Option">
            <li>
              <a href="Options" className="LinksHome">
                Options
              </a>
            </li>
            <li>
              <a href="Leave" className="LinksHome">
                Quitter
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
