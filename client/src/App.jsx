import Quizz from "./components/Quizz";
import HomePage from "./components/HomePage";
import ClickEffect from "./components/ClickEffect";


function App() {
  return (
    <main>
      <Quizz />
      <HomePage />
      <ClickEffect handleAnswerClick={handleAnswerClick} />
    </main>
  );
}

export default App;
