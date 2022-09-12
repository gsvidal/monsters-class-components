import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
    // console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          () => {
            // console.log('before update state');
            return { monsters: result, filteredMonsters: result };
          },
          () => {
            // console.log('after update state but with new state');
          }
        )
      );
  }

  handleSearch = (event) => {
    const { monsters } = this.state;

    const filtered = monsters.filter((monster) =>
      monster.name
        .toLocaleLowerCase()
        .startsWith(event.target.value.toLocaleLowerCase())
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
        <h1 className="title">Monsters Rolodex</h1>
        <h2 className="subtitle">&#40; Class based components &#41;</h2>
        <SearchBox
          onChangeHandler={handleSearch}
          className="search-box--monster"
          placeholder="Search for a monster"
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
