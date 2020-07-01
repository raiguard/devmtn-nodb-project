import React, { Component } from "react";

import InputField from "./InputField";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputField: false
    };
  }

  onNameClick = () => this.setState({ showInputField: true });

  changeName = (newName) => {
    const { changeNameFn, index } = this.props;
    changeNameFn(index, newName);
    this.setState({ showInputField: false });
  };

  render() {
    const { showInputField } = this.state;
    const { index, name, image, allowEdit, onClickFn } = this.props;
    return (
      <div
        className={`amiibo-card ${onClickFn ? "amiibo-card-clickable" : null}`}
        onClick={() => onClickFn(name, image)}
      >
        {/* wrap image in a div to preserve aspect ratio with flexbox */}
        <div className="amiibo-image-container">
          <img className="amiibo-image" src={image} alt={name} />
        </div>
        {showInputField ? (
          <InputField placeholder="Enter name" initialText={name} onConfirmFn={this.changeName} />
        ) : (
          <span
            className={`amiibo-name ${allowEdit ? "amiibo-name-editable" : null}`}
            onClick={allowEdit ? this.onNameClick : null}
          >
            {name}
          </span>
        )}
      </div>
    );
  }
}
