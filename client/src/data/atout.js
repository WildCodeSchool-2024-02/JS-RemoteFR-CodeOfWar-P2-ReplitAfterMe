import doubleIt from "./functions_atout/doubleIt";
import imgEchange from "../assets/images/changeQuestions.png";
import call from "../assets/images/call.png";

const atouts = [
  {
    name: "Double",
    img: {
      src: "https://cdn-icons-png.flaticon.com/512/25/25685.png",
      alt: "multiplie les points par deux",
    },
    function: doubleIt,
  },
  {
    name: "Change Question",
    img: {
      src: imgEchange,
      alt: "change la question",
    },
    function: doubleIt,
  },
  {
    name: "Call",
    img: {
      src: call,
      alt: "suggère une réponse",
    },
    function: doubleIt,
  },
  {
    name: "50/50",
    img: {
      src: "https://images.squarespace-cdn.com/content/598e92d1cf81e026f620f91e/1502521171750-X1NS3NKPHMDZT3GVCM7J/logo8.gif?content-type=image%2Fgif",
      alt: "supprime deux mauvaises réponses",
    },
    function: doubleIt,
  },
];

export default atouts;
