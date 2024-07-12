import { Outlet } from "react-router-dom";
import { MusicProvider } from "./context/MusicContext";

function App() {
  return (
    <main>
      <MusicProvider>
        <Outlet />
      </MusicProvider>
    </main>
  );
}

export default App;
