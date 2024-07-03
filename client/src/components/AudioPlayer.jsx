import { useState } from "react";

import url from "../assets/music/Mousse.mp3";
import volumeOff from "../assets/images/volume-off.png";
import volumeUp from "../assets/images/volume-up.png";

export default function AudioPlayer() {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  console.info(playing);

  const togglePlayBack = () => setPlaying(!playing);

  const start = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  return (
    <div>
      {playing ? (
        <img
          className="volumeImg"
          aria-hidden="true"
          src={volumeOff}
          alt="Volume Off"
          onClick={() => {
            pause();
            togglePlayBack();
          }}
        />
      ) : (
        <img
          className="volumeImg"
          aria-hidden="true"
          src={volumeUp}
          alt="Volume On"
          onClick={() => {
            start();
            togglePlayBack();
          }}
        />
      )}
    </div>
  );
}
