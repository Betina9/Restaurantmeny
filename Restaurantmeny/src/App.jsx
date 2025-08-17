import "./index.css";
import { meny } from "./data/meny";
import Menu from "./components/Menu";

function App() {
  return (
    <main>
      <header style={{ marginBottom: 16 }}>
        <h1>Restaurant meny</h1>
      </header>
      <Menu items={meny} />
    </main>
  );
}

export default App;
