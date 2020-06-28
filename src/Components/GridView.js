import React, { Component } from "react";

import axios from "axios";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showAddButton: true
    };
  }

  componentDidMount() {
    axios
      .get("/api/amiibo/")
      .then((res) => {
        console.log(res);
        this.setState({ items: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  onAddButtonClick = () => {
    // TODO switch to library GridView
  };

  changeName = (index, newName) => {
    // TODO change name on backend, update items
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
        {showAddButton ? <AddAmiiboButton onClick={this.onAddButtonClick} /> : null}
      </div>
    );
  }
}
