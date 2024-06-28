import Story from "./components/Story";
import Quizz from "./components/Quizz";
import HomePage from "./components/HomePage";

function App() {
  return (
    <main>
      <HomePage />
      <section className="sectionQuizz">
        <Quizz />
      </section>
      <Story />
    </main>
  );
}

export default App;
