import { Outlet } from "react-router-dom";
import ChapterProvider from "./contexts/ChapterContext";

function App() {
  return (
    <ChapterProvider>
      <main>
        <Outlet />
      </main>
    </ChapterProvider>
  );
}

export default App;
