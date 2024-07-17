import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ChapterContext = createContext();

export function ChapterProvider({ children }) {
  const [chapter, setChapter] = useState(0);
  const chap = useMemo(() => ({ chapter, setChapter }), [chapter, setChapter]);
  return (
    <ChapterContext.Provider value={chap}>{children}</ChapterContext.Provider>
  );
}

ChapterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
