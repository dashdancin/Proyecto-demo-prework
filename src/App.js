import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <p>
          Probando la nueva integración de Visual Studio Code en Github <br/>Es una locura!!<code>src/App.js</code> and save to reload.
        </p>
        <p>
          Cambio para probar la solicitud de contraseña
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
