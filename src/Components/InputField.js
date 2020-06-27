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
    if (e.keyCode === 13) this.props.changeNameFn(this.state.currentText);
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
