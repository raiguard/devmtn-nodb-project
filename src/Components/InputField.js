import React, { Component } from "react";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: this.props.initialText
    };
  }

  onChange = (e) => this.setState({ currentText: e.target.value });

  onKeyUp = (e) => {
    // TODO set name for amiibo and hide input field
    if (e.keyCode === 13) alert("Hello!");
  };

  render = () => {
    const { placeholder } = this.props;
    const { currentText } = this.state;
    return (
      <input
        className="amiibo-input-field"
        placeholder={placeholder}
        value={currentText}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
      />
    );
  };
}
