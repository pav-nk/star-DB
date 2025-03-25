import React from "react";

import { Header } from "../header";
import { RandomCharacter } from "../random-character";
import { ItemList } from "../item-list";
import { Character } from "../character";

import "./app.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <RandomCharacter />
      <div className="d-flex main">
        <ItemList />
        <Character />
      </div>
    </div>
  );
};

export default App;
