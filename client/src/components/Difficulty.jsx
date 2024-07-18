import { useDifficulty } from "../contexts/DifficultyContext";

export default function Difficulty() {
  const { setDifficulty, difficulty } = useDifficulty();

  const getClasseExpanded = (mode) =>
    difficulty === mode ? "difficulty-button expanded" : "difficulty-button";

  return (
    <div>
      <div className="difficulty-container">
        <button
          type="button"
          onClick={() => setDifficulty("Facile")}
          className={getClasseExpanded("Facile")}
        >
          Facile
        </button>
        <button
          type="button"
          onClick={() => setDifficulty("Moyen")}
          className={getClasseExpanded("Moyen")}
        >
          Moyen
        </button>
        <button
          type="button"
          onClick={() => setDifficulty("Difficile")}
          className={getClasseExpanded("Difficile")}
        >
          Difficile
        </button>
      </div>
    </div>
  );
}
