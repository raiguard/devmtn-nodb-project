import React, { Component } from "react";

import AddAmiiboButton from "./AddAmiiboButton";
import AmiiboCard from "./AmiiboCard";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          index: 0,
          image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
          name: "Mario"
        }
      ],
      showAddButton: this.props.showAddButton
    };
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
