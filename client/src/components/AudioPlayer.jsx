import { useMusic } from "../contexts/MusicContext";

import volumeOff from "../assets/images/volume-off.png";
import volumeUp from "../assets/images/volume-up.png";

export default function AudioPlayer() {
  const { audioM, volume, setVolume } = useMusic();

  const start = () => {
    audioM.play();
  };

  const pause = () => {
    audioM.pause();
  };

  const turnOff = () => {
    pause();
    setVolume(0);
  };

  const changeVolume = () => {
    if (volume > 0) {
      start();
    }
  };

  return (
    <div className="optionVolume">
      {volume === 0 ? (
        <img
          className="volumeImg"
          aria-hidden="true"
          src={volumeOff}
          alt="Volume Off"
        />
      ) : (
        <img
          onClick={() => {
            pause();
            turnOff();
          }}
          className="volumeImg"
          aria-hidden="true"
          src={volumeUp}
          alt="Volume On"
        />
      )}
      <input
        className="volume-range vrange"
        id="musicSlider"
        type="range"
        min="0"
        max="1"
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
