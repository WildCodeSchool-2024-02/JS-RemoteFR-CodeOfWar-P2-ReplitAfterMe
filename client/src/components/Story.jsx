import { useState } from "react";

import "../style/story.css";

import story from "../data/story";

function Story() {
  const [index, setIndex] = useState(0);

  const nextStory = () => {
    setIndex((prevIndex) => {
      if (prevIndex < story.intro.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };
  return (
    <section className="storySection" onClick={nextStory} aria-hidden="true">
      {parseInt(index, 10) === story.intro.length - 1 ? (
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">retour menu</a>
      ) : (
        <p>{story.intro[parseInt(index, 10)].text}</p>
      )}
    </section>
  );
}

export default Story;
