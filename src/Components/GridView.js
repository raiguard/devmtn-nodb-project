import React, { Component } from "react";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  changeName = (index, newName) => {
    // TODO change name on backend, update items
  };

  selectAmiibo = (e) => {
    alert("SELECTED");
  };

  render() {
    const { items, view, switchViewFn } = this.props;
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
            onClickFn={view === "library" ? this.selectAmiibo : null}
          />
        ))}
        {view === "collection" ? <AddAmiiboButton onClick={() => switchViewFn("library")} /> : null}
      </div>
    );
  }
}
