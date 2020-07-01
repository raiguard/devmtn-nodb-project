import React, { Component } from "react";

import InputField from "./InputField";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputField: false
    };
  }

  onNameClick = (e) => {
    e.stopPropagation();
    this.setState({ showInputField: true });
  };

  changeName = (newName) => {
    const { changeNameFn, index } = this.props;
    changeNameFn(index, newName);
    this.setState({ showInputField: false });
  };

  render() {
    const { showInputField } = this.state;
    const { index, name, image, onClickFn, view } = this.props;
    const nameIsEditable = view === "collection";
    return (
      <div
        className={`amiibo-card ${nameIsEditable ? "amiibo-card-deletable" : "amiibo-card-clickable"}`}
        onClick={() => onClickFn(name, image, index)}
      >
        {/* wrap image in a div to preserve aspect ratio with flexbox */}
        <div className="amiibo-image-container">
          <img className="amiibo-image" src={image} alt={name} />
        </div>
        {showInputField ? (
          <InputField
            style="amiibo-input-field"
            placeholder="Enter name"
            initialText={name}
            onConfirmFn={this.changeName}
          />
        ) : (
          <span
            className={`amiibo-name ${nameIsEditable ? "amiibo-name-editable" : null}`}
            onClick={nameIsEditable ? this.onNameClick : () => null}
          >
            {name}
          </span>
        )}
      </div>
    );
  }
}
