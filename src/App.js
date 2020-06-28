import React, { Component } from "react";

// import axios from "axios";

import GridView from "./Components/GridView";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "collection"
    };
  }

  render() {
    return (
      <div className="app">
        <span className="app-title">{this.state.view === "collection" ? "My Collection" : "Add an Amiibo"}</span>
        <GridView view={this.state.view} />
        {/* TODO show editor toolbar */}
      </div>
    );
  }
}
