import imgEchange from "../assets/images/changeQuestions.png";
import call from "../assets/images/call.png";
import x2 from "../assets/images/x2.png";
import bonChance from "../assets/images/50-50.png";

const atouts = [
  {
    name: "Double",
    img: {
      src: x2,
      alt: "multiplie les points par deux",
    },
  },
  {
    name: "Change Question",
    img: {
      src: imgEchange,
      alt: "change la question",
    },
  },
  {
    name: "Call",
    img: {
      src: call,
      alt: "suggère une réponse",
    },
  },
  {
    name: "50/50",
    img: {
      src: bonChance,
      alt: "supprime deux mauvaises réponses",
    },
  },
];

export default atouts;
