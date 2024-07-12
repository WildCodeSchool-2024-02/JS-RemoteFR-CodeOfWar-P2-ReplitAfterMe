import { useState } from "react";
import { useMusic } from "../context/MusicContext";

import volumeOff from "../assets/images/volume-off.png";
import volumeUp from "../assets/images/volume-up.png";

export default function AudioPlayer() {
  const { audioM } = useMusic();
  const [volume, setVolume] = useState(0);

  // contrôle du son

  const start = () => {
    audioM.play();
  };

  const pause = () => {
    audioM.pause();
  };

  const changeVolume = () => {
    if (volume < 0.01) {
      pause();
    } else if (volume > 0.01) {
      start();
    }
  };

  return (
    <div className="optionVolume">
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
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
          audioM.volume = volume;
          changeVolume();
        }}
      />
    </div>
  );
}
