import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dai hoc Bach Khoa Ha Noi
          so 2 Dai Co Viet
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
