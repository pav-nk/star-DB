import { Component } from "react";

import { Header } from "../header";
import { RandomCharacter } from "../random-character";
import { ItemList } from "../item-list";
import { Item } from "../item";

import "./app.css";

class App extends Component {
  state = {
    showRandomCharacter: true,
    selectedItem: null,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => ({
      showRandomCharacter: !state.showRandomCharacter,
    }));
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { showRandomCharacter } = this.state;

    return (
      <div className="container">
        <Header />
        {showRandomCharacter ? <RandomCharacter /> : null}
        <button
          className="btn btn-primary mb-4"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Button
        </button>
        <div className="d-flex main">
          <ItemList onItemSelected={this.onItemSelected} />
          <Item itemId={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default App;
