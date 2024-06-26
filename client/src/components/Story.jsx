import { useState } from "react";

import story from "../data/story";

function Story() {
  const [index, setIndex] = useState(0);
  const nextStory = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  console.info(index);
  console.info(story.intro[parseInt(index, 10)].text);
  return (
    <>
      <p>{story.intro[parseInt(index, 10)].text}</p>
      <button type="button" onClick={nextStory}>
        next
      </button>
    </>
  );
}

export default Story;
