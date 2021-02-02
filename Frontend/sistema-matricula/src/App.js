import logo from './logo.svg';
import './App.css';

function  LinkParaGoogle() {
  return <div>
      <a href="https://www.google.com/">Link para Google</a>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Link para google:<LinkParaGoogle></LinkParaGoogle>
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

