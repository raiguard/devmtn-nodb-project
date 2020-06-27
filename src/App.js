import React, { Component } from "react";

import GridView from "./Components/GridView";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <span className="app-title">My Collection</span>
        <GridView showAddButton={true} />
      </div>
    );
  }
}
