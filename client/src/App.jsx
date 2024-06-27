import ClickEffect from "./components/ClickEffect";

function App() {
  const handleAnswerClick = (answer) => {
    console.info(`Réponse cliquée: ${answer}`);
  };

  return (
    <div className="App">
      <ClickEffect handleAnswerClick={handleAnswerClick} />
    </div>
  );
}

export default App;
