import { useEffect } from "react";
import "../style/rainStory.css";

export default function RainEffect() {
  useEffect(() => {
    function rain() {
      const cloud = document.querySelector(".rain-cloud");
      const e = document.createElement("div");
      const left = Math.floor(Math.random() * 310);
      const width = Math.random() * 5;
      const height = Math.random() * 50;
      const duration = Math.random() * 0.5;

      e.classList.add("rain-drop");
      cloud.appendChild(e);
      e.style.left = `${left}px`;
      e.style.width = `${0.5 + width}px`;
      e.style.height = `${0.5 + height}px`;
      e.style.animationDuration = `${1 + duration}s`;

      setTimeout(() => {
        cloud.removeChild(e);
      }, 2000);
    }

    const interval = setInterval(rain, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rain-container">
      <div className="rain-cloud" />
    </div>
  );
}
