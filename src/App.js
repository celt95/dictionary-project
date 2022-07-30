import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Looking for a word?</header>
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>Coded by Cylia</footer>
    </div>
  );
}

export default App;
