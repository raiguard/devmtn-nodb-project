import React, { Component } from "react";

// import axios from "axios";

import GridView from "./Components/GridView";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <span className="app-title">My Collection</span>
        <GridView />
      </div>
    );
  }
}
