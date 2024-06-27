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
      <HomePage />
      <Story />
      <section>
        <Quizz />
        <ClickEffect handleAnswerClick={handleAnswerClick} />
      </section>
    </main>
  );
}

export default App;
