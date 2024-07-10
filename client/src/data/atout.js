import doubleIt from "./functions_atout/doubleIt";
import imgEchange from "../assets/images/changeQuestions.png";

const atouts = [
  {
    name: "Double",
    img: {
      src: "https://cdn-icons-png.flaticon.com/512/25/25685.png",
      alt: "logo cliquable multiplie les points par deux",
    },
    function: doubleIt,
  },
  {
    name: "Change Question",
    img: {
      src: imgEchange,
      alt: "logo cliquable change la question",
    },
    function: doubleIt,
  },
  {
    name: "tata",
    img: {
      src: "https://cdn-icons-png.flaticon.com/512/25/25685.png",
      alt: "",
    },
    function: doubleIt,
  },
  {
    name: "POULE",
    img: {
      src: "https://cdn-icons-png.flaticon.com/512/25/25685.png",
      alt: "",
    },
    function: doubleIt,
  },
];

export default atouts;
