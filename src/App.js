import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation.jsx';

class App extends Component {

  componentDidMount() {
    document.title = "Jussi Wallin";
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
          <h1 className="App-title">Jussi Wallin</h1>
          <h2 className="App-subtitle">Software developer, free-time electronics hacker and ICT student! (With a dab of gamer for flavor)</h2>
        </header>
      </div>
    );
  }
}

export default App;
