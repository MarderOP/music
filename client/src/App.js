import logo from './logo.svg';
import './App.css';
import MusicComponent from './MusicComponent';
function App() {
  let Music={
    Chords: [
      { Name: 'C', Path: [0, 1, 0, 2, 3, 0] },
      { Name: 'G', Path: [3, 2, 0, 0, 3, 3] },
    ],
    Song: [
      { Play: 'C', Interval: 1000 },
      { Play: 'G', Interval: 1000 },
    ],
    Capo:1
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <MusicComponent Music={Music}/>
      </header>
    </div>
  );
}

export default App;
