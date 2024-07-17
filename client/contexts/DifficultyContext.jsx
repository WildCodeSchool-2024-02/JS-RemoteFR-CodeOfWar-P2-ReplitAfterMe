import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";

const DifficultyContext = createContext();

export default function DifficultyProvider({ children }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [seconds, setSeconds] = useState(10);

  const difficultyValue = useCallback(() => {
    if (difficulty === "easy") {
      setSeconds(20);
    } else if (difficulty === "medium") {
      setSeconds(15);
    } else if (difficulty === "hard") {
      setSeconds(10);
    }
  }, [difficulty, setSeconds]);

  useEffect(() => {
    difficultyValue();
  }, [difficulty, difficultyValue]);

  const value = useMemo(
    () => ({
      seconds,
      setSeconds,
      difficulty,
      setDifficulty,
    }),
    [difficulty, seconds]
  );
  return (
    <DifficultyContext.Provider value={value}>
      {children}
    </DifficultyContext.Provider>
  );
}

export const useDifficulty = () => useContext(DifficultyContext);

DifficultyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
