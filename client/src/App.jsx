import Story from "./components/Story";
import Quizz from "./components/Quizz";
import HomePage from "./components/HomePage";

function App() {
  return (
    <main>
      <h1>Geo Quest</h1>;
      <HomePage />
      <Story />
      <section>
        <Quizz />
      </section>
    </main>
  );
}

export default App;
