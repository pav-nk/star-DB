import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import { Spinner } from "../spinner";

import "./random-character.css";

export default class RandomCharacter extends Component {
  state = {
    data: {},
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    console.log("did mount");
    this.updateItem();
    this.interval = setInterval(() => this.updateItem(), 10000);
  }

  componentWillUnmount() {
    console.log("un mount");
    clearInterval(this.interval);
  }

  updateItem = async () => {
    const randomId = await this.swapiService.getRandomCharacterId();
    this.swapiService
      .getCharacter(randomId)
      .then(this.onCharacterLoaded)
      .catch(this.onError);
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  onCharacterLoaded = (data) => {
    this.setState({ data, loading: false, error: false });
  };

  render() {
    const {
      data: { name, description, image },
      error,
      loading,
    } = this.state;

    const hasData = !(loading || error);

    const content = hasData ? (
      <>
        <img className="planet-image" src={image} />
        <div>
          <h4>{name}</h4>
          <p>
            <b>Description:</b> <span>{description}</span>
          </p>
        </div>
      </>
    ) : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <p>Error!</p> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
