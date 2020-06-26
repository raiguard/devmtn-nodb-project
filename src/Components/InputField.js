import React, { Component } from "react";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ""
    };
  }

  onChange = (e) => this.setState({ currentText: e.target.value });

  render = () => {
    const { placeholder } = this.props;
    const { currentText } = this.state;
    return <input placeholder={placeholder} value={currentText} onChange={this.onChange} />;
  };
}
