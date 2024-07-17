import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChapterContext } from "../contexts/ChapterContext";
import "../style/story.css";

function Story() {
  const { chapter, setChapter } = useContext(ChapterContext);
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      setChapter(chapter + 1);
      setInitialized(true);
    }
  }, [chapter, setChapter, initialized]);

  return (
    <section>
      J'afficherai ici mon Histoire
      <Link to={`/quizz/${chapter}`}>
        <button type="button">Commencer Quizz</button>
      </Link>
    </section>
  );
}

export default Story;
