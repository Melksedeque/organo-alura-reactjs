import logo from "./logo.svg";
import "./App.css";
import Banner from "./componentes/Banner/Banner.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem-vindo ao React.JS
          <br />
          <small>Aqui é onde o filho chora e a mãe não vê!</small>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
