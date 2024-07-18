import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

import detectiveF from "../assets/images/detective-femme.png";
import detectiveH from "../assets/images/detective-homme.png";

const AvatarContext = createContext();

export function AvatarProvider({ children }) {
  const [avatarOpacityF, setAvatarOpacityF] = useState("avatar-img");
  const [avatarOpacityH, setAvatarOpacityH] = useState("avatar-img");
  const [selectF, setSelectF] = useState(false);
  const [selectH, setSelectH] = useState(false);
  const imgWoman = detectiveF;
  const imgMan = detectiveH;

  const selected = useMemo(
    () => ({
      avatarOpacityF,
      setAvatarOpacityF,
      avatarOpacityH,
      setAvatarOpacityH,
      selectF,
      setSelectF,
      selectH,
      setSelectH,
      imgWoman,
      imgMan,
    }),
    [avatarOpacityF, avatarOpacityH, selectF, selectH, imgMan, imgWoman]
  );

  return (
    <AvatarContext.Provider value={selected}>{children}</AvatarContext.Provider>
  );
}

export const useAvatar = () => useContext(AvatarContext);

AvatarProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
