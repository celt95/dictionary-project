import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1>Dictionary</h1>
        <main>
          <Dictionary defaultkeyword="sunshine" />
        </main>
      </div>
      <footer className="mt-5">
        <a
          href="https://github.com/celt95/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Cylia Tareb
      </footer>
    </div>
  );
}

export default App;
