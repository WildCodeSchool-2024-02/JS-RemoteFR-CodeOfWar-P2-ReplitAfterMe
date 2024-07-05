import { useState, useEffect } from "react";
import atout from "../assets/images/atout.png";
import reload from "../assets/images/alter.png";
import call from "../assets/images/call.png";
import x2 from "../assets/images/x2.png";

import "../style/atout.css";

export default function Atout() {
  const [prob, setProb] = useState(false);
  console.info(prob);
  const probability = (threshold = 0.75) => {
    // permet d'avoir 75% de chance de rendre l'élement//
    const random = Math.random() < threshold;
    return random;
  };

  useEffect(() => {
    setProb(probability());
  }, []);

  const handleClick = () => {
    if (probability()) {
      console.info("utilisation ok !");
    }
  };

  return (
    <div className="content">
      <img
        src={atout}
        alt="Utilisation de l'atout 50/50"
        className="img-atout"
      />
      <img
        src={reload}
        alt="Utilisation de l'atout reload"
        className="img-atout"
      />
      <div aria-hidden="true" onClick={handleClick}>
        <img
          src={call}
          alt="Utilisation de l'atout appel à un ami"
          className="img-atout"
        />
      </div>
      <img
        src={x2}
        alt="Utilisation de l'atout point x2"
        className="img-atout"
      />
    </div>
  );
}
