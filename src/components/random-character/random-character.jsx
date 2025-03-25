import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import { Spinner } from "../spinner";

import "./random-character.css";

export default class RandomCharacter extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  onCharacterLoaded = (planet) => {
    this.setState(() => ({ planet, loading: false }));
  };

  componentDidMount() {
    this.swapiService
      .getCharacter("64292927021f17e13fbc1e46")
      .then((data) => this.onCharacterLoaded(data))
      .catch(this.onError);
  }

  render() {
    const {
      planet: { name, description, image },
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
