import React, { Component } from "react";

import axios from "axios";

import GridView from "./Components/GridView";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      view: "collection"
    };
  }

  componentDidMount() {
    this.updateItems();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.view !== prevState.view) {
      this.updateItems();
    }
  }

  switchView = (view) => {
    this.setState({ view });
  };

  updateItems = () => {
    if (this.state.view === "collection") {
      axios
        .get("/api/collection/")
        .then((res) => {
          this.setState({ items: res.data });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get("/api/amiibo/")
        .then((res) => {
          this.setState({ items: res.data });
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const { items, view } = this.state;
    return (
      <div className="app">
        <span className="app-title">{view === "collection" ? "My Collection" : "Add an Amiibo"}</span>
        <GridView items={items} view={view} switchViewFn={this.switchView} updateItemsFn={this.updateItems} />
      </div>
    );
  }
}
