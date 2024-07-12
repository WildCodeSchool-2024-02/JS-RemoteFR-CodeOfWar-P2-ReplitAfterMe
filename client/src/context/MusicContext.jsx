import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

import url from "../assets/music/Mousse.mp3";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [audio] = useState(new Audio(url));

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MusicContext.Provider value={{ audio }}>{children}</MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);

MusicProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
