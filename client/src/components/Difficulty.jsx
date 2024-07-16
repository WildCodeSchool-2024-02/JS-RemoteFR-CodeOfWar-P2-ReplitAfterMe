import { useDifficulty } from "../../contexts/DifficultyContext";

export default function Difficulty() {
  const { difficulty, setDifficulty } = useDifficulty();

  return (
    <div>
      <p>{difficulty}</p>
      <div>
        <button type="button" onClick={() => setDifficulty("easy")}>
          Facile
        </button>
        <button type="button" onClick={() => setDifficulty("medium")}>
          Moyen
        </button>
        <button type="button" onClick={() => setDifficulty("hard")}>
          Difficile
        </button>
      </div>
    </div>
  );
}
