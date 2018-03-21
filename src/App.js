import React, {Component} from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    document.title = "Jussi Wallin";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jussi Wallin</h1>
          <h2 className="App-subtitle">Software developer, free-time electronics hacker and all-round good guy!</h2>
        </header>
      </div>
    );
  }
}

export default App;
