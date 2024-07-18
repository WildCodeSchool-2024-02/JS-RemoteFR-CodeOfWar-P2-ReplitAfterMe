import { useAvatar } from "../contexts/AvatarContext";

export default function Avatar() {
  const {
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
  } = useAvatar();

  return (
    <div className="avatar">
      <img
        className={avatarOpacityF}
        aria-hidden="true"
        onClick={() => {
          if (!selectF) {
            setSelectF(true);
            setSelectH(false);
            setAvatarOpacityF("avatar-img");
            setAvatarOpacityH("avatar-img opacity");
          } else {
            setSelectF(false);
            setAvatarOpacityF("avatar-img opacity");
          }
        }}
        src={imgWoman}
        alt="femme detective"
      />
      <img
        className={avatarOpacityH}
        aria-hidden="true"
        onClick={() => {
          if (!selectH) {
            setSelectH(true);
            setSelectF(false);
            setAvatarOpacityH("avatar-img");
            setAvatarOpacityF("avatar-img opacity");
          } else {
            setSelectH(false);
            setAvatarOpacityH("avatar-img opacity");
          }
        }}
        src={imgMan}
        alt="homme detective"
      />
    </div>
  );
}
