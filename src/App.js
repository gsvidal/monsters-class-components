import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
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
            return { monsters: result, filteredMonsters: result };
          },
          () => {
            console.log('after update state but with new state');
          }
        )
      );
  }

  handleSearch = (event) => {
    const { monsters } = this.state;

    const filtered = monsters.filter((monster) =>
      monster.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    this.setState({
      filteredMonsters: filtered,
    });
  };

  render() {
    console.log('render App component');

    const { filteredMonsters } = this.state;
    const { handleSearch } = this;

    return (
      <div className="App">
        <header className="App-header">
          <input type="search" className="input" onChange={handleSearch} />
          {filteredMonsters.map((monster) => (
            <h2 key={monster.name}>{monster.name}</h2>
          ))}
        </header>
      </div>
    );
  }
}
export default App;
