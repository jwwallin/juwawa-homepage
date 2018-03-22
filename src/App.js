import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';

class App extends Component {

  componentDidMount() {
    document.title = "Jussi Wallin";
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <div className="page-footer">
          Check me out on LinkedIn and GitHub:<br/>
          <a href="https://www.linkedin.com/in/jussi-wallin-02267b91/"><img className="linkedin-logo" src="./In-2CRev-66px-TM.png" alt="LinkedIn"/></a>
          <a href="https://github.com/jwwallin"><img className="github-logo" src="./GitHub-Mark-Light-64px.png" alt="GitHub"/></a>
        </div>
      </div>
    );
  }
}

export default App;
