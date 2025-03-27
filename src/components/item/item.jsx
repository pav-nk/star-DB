import { Component } from "react";

import "./item.css";
import SwapiService from "../../services/swapi-service";

export default class Item extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
  };

  componentDidMount() {
    this.updateitem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateitem();
    }
  }

  updateitem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.swapiService.getCharacter(itemId).then((item) => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name, description, image } = item;

    return (
      <div className="item card">
        <img className="item-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <p>
            <b>Description </b>
            {description}
          </p>
        </div>
      </div>
    );
  }
}
