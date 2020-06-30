import React, { Component } from "react";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  onAddButtonClick = () => {
    // TODO switch to library GridView
  };

  changeName = (index, newName) => {
    // TODO change name on backend, update items
  };

  render() {
    const { items, view } = this.props;
    return (
      <div className="grid-view">
        {items.map((item, i) => (
          <AmiiboCard
            key={i}
            name={item.name}
            image={item.image}
            index={item.index}
            changeNameFn={this.changeName}
            allowEdit={view === "collection"}
          />
        ))}
        {view === "collection" ? <AddAmiiboButton onClick={this.onAddButtonClick} /> : null}
      </div>
    );
  }
}
