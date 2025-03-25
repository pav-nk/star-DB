import { Component } from "react";

import "./character.css";

export default class Character extends Component {
  render() {
    return (
      <div className="character card">
        {/* <img className="person-image" src="" /> */}

        <div className="card-body">
          <h4>R2-D2</h4>
        </div>
      </div>
    );
  }
}
