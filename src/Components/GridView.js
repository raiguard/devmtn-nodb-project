import React, { Component } from "react";

import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showAddButton: this.props.showAddButton
    };
  }
  render() {
    return (
      <div className="grid-view">
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
        <AmiiboCard />
      </div>
    );
  }
}
