import React from 'react';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          () => {
            console.log('before update state');
            return { monsters: result };
          },
          () => {
            console.log('after update state but with new state');
          }
        )
      );
  }

  render() {
    console.log('render App component');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.monsters.map((monster) => (
            <h2 key={monster.name}>{monster.name}</h2>
          ))}
        </header>
      </div>
    );
  }
}
export default App;
