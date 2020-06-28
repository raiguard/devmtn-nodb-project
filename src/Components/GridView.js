import React, { Component } from "react";

import axios from "axios";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.updateItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.view !== this.props.view) {
      this.updateItems();
      console.log("UPDATED");
    }
  }

  onAddButtonClick = () => {
    // TODO switch to library GridView
  };

  changeName = (index, newName) => {
    // TODO change name on backend, update items
  };

  updateItems = () => {
    if (this.props.view === "collection") {
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
    const { items, showAddButton } = this.state;
    return (
      <div className="grid-view">
        {items.map((item, i) => (
          <AmiiboCard
            key={i}
            name={item.name}
            image={item.image}
            index={item.index}
            changeNameFn={this.changeName}
            allowEdit={true}
          />
        ))}
        {/* {showAddButton ? <AddAmiiboButton onClick={this.onAddButtonClick} /> : null} */}
      </div>
    );
  }
}
