/* eslint-disable react/no-danger */
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChapterContext } from "../contexts/ChapterContext";
import story from "../data/story";
import RainStory from "./RainStory";
import "../style/story.css";
import "../style/rainStory.css";

export default function Story() {
  const { chapter, setChapter } = useContext(ChapterContext);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setChapter(chapter + 1);
      setInitialized(true);
    }
  }, [initialized, chapter, setChapter]);

  if (chapter === 0) {
    return <p>loading...</p>;
  }

  return (
    <section className="story-container">
      <div className="story-wrapper">
        <RainStory />
        <div
          className="story-text-chapter"
          dangerouslySetInnerHTML={{ __html: story[chapter - 1].text }}
        />
        <Link to={`/quizz/${chapter}`}>
          <button className="next-quizz" type="button">
            Continuer Quizz
          </button>
        </Link>
      </div>
    </section>
  );
}
