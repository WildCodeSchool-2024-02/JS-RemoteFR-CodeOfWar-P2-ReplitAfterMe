import { useState } from "react";

import url from "../assets/music/quiz.mp3";
import volumeOff from "../assets/images/volume-off.png";
import volumeUp from "../assets/images/volume-up.png";

export default function AudioPlayer() {
  const [audio] = useState(new Audio(url));
  const [volume, setVolume] = useState(0);

  console.info(volume);

  // contrôle du son

  const start = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  const changeVolume = () => {
    if (volume < 0.01) {
      pause();
    } else if (volume > 0.01) {
      start();
    }
  };

  return (
    <div>
      {/* changement de l'icone volume */}
      {volume === 0 ? (
        <img
          className="volumeImg"
          aria-hidden="true"
          src={volumeOff}
          alt="Volume Off"
        />
      ) : (
        <img
          className="volumeImg"
          aria-hidden="true"
          src={volumeUp}
          alt="Volume On"
        />
      )}
      {/* contrôle du volume */}
      <input
        className="volume-range vrange"
        id="musicSlider"
        type="range"
        min={0.01}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
          audio.volume = volume;
          changeVolume();
        }}
      />
    </div>
  );
}
