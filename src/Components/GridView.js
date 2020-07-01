import React, { Component } from "react";

import axios from "axios";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  changeName = (index, newName) => {
    axios
      .put(`/api/collection/${index}`, { newName })
      .then(() => this.props.updateItemsFn())
      .catch((err) => console.log(err));
  };

  deleteAmiiboInCollection = (_, __, index) => {
    axios
      .delete(`/api/collection/${index}`)
      .then(() => this.props.updateItemsFn())
      .catch((err) => console.log(err));
  };

  selectAmiiboInLibrary = (name, image) => {
    const { view, switchViewFn } = this.props;
    if (view === "library") {
      axios
        .post("/api/collection", { name, image })
        .then(() => switchViewFn("collection"))
        .catch((err) => console.log(err));
    }
  };

  render() {
    const { items, view, switchViewFn } = this.props;
    return (
      <section className="grid-view">
        {items.map((item, i) => (
          <AmiiboCard
            key={i}
            name={item.name}
            image={item.image}
            index={item.index}
            changeNameFn={this.changeName}
            onClickFn={view === "library" ? this.selectAmiiboInLibrary : this.deleteAmiiboInCollection}
            view={view}
          />
        ))}
        {view === "collection" ? <AddAmiiboButton onClick={() => switchViewFn("library")} /> : null}
      </section>
    );
  }
}
