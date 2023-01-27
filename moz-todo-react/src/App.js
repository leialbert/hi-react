import logo from './logo.svg';
import './App.css';

function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {subject}!</p>
      </header>
    </div>
  );
}

export default App;
