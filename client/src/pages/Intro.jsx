import { Link } from "react-router-dom";
import { useContext } from "react";
import detective from "../assets/images/detective-2.png";
import Rain from "../components/Rain";
import "../style/intro.css";
import { ChapterContext } from "../contexts/ChapterContext";

export default function Intro() {
  const { chapter } = useContext(ChapterContext);
  return (
    <div className="intro-container">
      <Rain count={100} />
      <div className="intro-logo">
        <h1>INTR </h1>
        <span className="pulse-container">
          <span className="pulse" />
        </span>
      </div>
      <div className="text">
        <div className="paragraphe-intro">
          <p>
            Année 3452, l'inspecteur " User.name " , inspecteur de renom est
            invité par la Centrale afin d'élucider l'affaire de ces deux
            dernières décennies. Un tueur en série s'est emparé d'une capsule
            spatio-temporelle afin de parcourir les époques pour semer le chaos,
            assassinant divers personnages historiques et altérer le monde tel
            que nous le connaissons. Parviendra-t'il à retrouver les indices et
            découvrir le nom du meurtrier?
          </p>
        </div>
        <div className="firstIntro">
          <p>
            _ Ah, te voilà! C'est toi le nouvel inspecteur que la centrale nous
            envoie? Dépêche-toi, l'équipage est déjà sur le départ.
          </p>

          <p> _ Quelle est la première étape?</p>

          <p>
            {" "}
            _ Direction l'Egypte ancienne, nos traqueurs temporels nous indiques
            que la cible s'est rendu à cet endroit pour débuter ses méfaits.
            Nous devons absolument le retrouver et réparer les dégâts!
          </p>

          <p> _ Entendu, allons voir ça de plus près.</p>
          <div className="introGame">
            <img src={detective} alt="detective" />
            <Link to={`/quizz/${chapter}`} className="playGame">
              Jouer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
