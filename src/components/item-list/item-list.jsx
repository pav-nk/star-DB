import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";

import { Spinner } from "../spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    itemsList: null,
  };

  componentDidMount() {
    this.swapiService.getAllCharacters().then((itemsList) => {
      this.setState({ itemsList });
    });
  }

  renderItems = (items) => {
    return items.map(({ name, id }) => {
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { itemsList } = this.state;

    if (!itemsList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">{this.renderItems(itemsList)}</ul>
    );
  }
}
