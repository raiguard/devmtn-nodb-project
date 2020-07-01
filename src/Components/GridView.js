import React, { Component } from "react";

import axios from "axios";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  selectAmiiboInLibrary = (name, image) => {
    const { view, switchViewFn } = this.props;
    if (view === "library") {
      axios.post("/api/collection", { name, image });
      switchViewFn("collection");
    }
  };

  render() {
    const { items, view, switchViewFn, changeNameFn } = this.props;
    return (
      <div className="grid-view">
        {items.map((item, i) => (
          <AmiiboCard
            key={i}
            name={item.name}
            image={item.image}
            index={item.index}
            changeNameFn={changeNameFn}
            allowEdit={view === "collection"}
            onClickFn={view === "library" ? this.selectAmiiboInLibrary : null}
          />
        ))}
        {view === "collection" ? <AddAmiiboButton onClick={() => switchViewFn("library")} /> : null}
      </div>
    );
  }
}
