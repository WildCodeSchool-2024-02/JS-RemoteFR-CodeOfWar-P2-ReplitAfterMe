import { Link } from "react-router-dom";
import detective from "../assets/images/detective.png";
import Rain from "./Rain";
import "../style/intro.css";

export default function Intro() {
  return (
    <div className="Intro1">
      <Rain count={100} />
      <div className="rain">
        <div className="intro">
          <h1>
            INTR
            <span className="pulse-container">
              <span className="pulse" />
            </span>
          </h1>
        </div>
        <div className="paraph1">
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
            " Ah, te voilà! C'est toi le nouvel inspecteur que la centrale nous
            envoie? Dépêche-toi, l'équipage est déjà sur le départ. Quelle est
            la première étape? Direction l'Egypte ancienne, nos traqueurs
            temporels nous indiques que la cible s'est rendu à cet endroit pour
            débuter ses méfaits. Nous devons absolument le retrouver et réparer
            les dégâts! Entendu, allons voir ça de plus près. "
          </p>
          <div className="introGame">
            <Link to="/quizz" className="playGame">
              Jouer
            </Link>
            <img src={detective} alt="detective" />
          </div>
        </div>
      </div>
    </div>
  );
}
