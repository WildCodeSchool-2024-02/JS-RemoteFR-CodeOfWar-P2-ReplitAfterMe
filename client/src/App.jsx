import Story from "./components/Story";
import Quizz from "./components/Quizz";
import HomePage from "./components/HomePage";
import ClickEffect from "./components/ClickEffect";

function App() {
  const handleAnswerClick = (answer) => {
    console.info(`Réponse cliquée: ${answer}`);
  };

  return (
    <main>
      <h1>Geo Quest</h1>;
      <Story />
      <Quizz />
      <HomePage />
      <ClickEffect handleAnswerClick={handleAnswerClick} />
    </main>
  );
}

export default App;
