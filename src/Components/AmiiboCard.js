import React, { Component } from "react";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <div className="amiibo-card">
        {/* wrap image in a div to preserve aspect ratio with flexbox */}
        <div className="amiibo-image-container">
          <img
            className="amiibo-image"
            src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
          />
        </div>
        <span className="amiibo-name">Zelda</span>
      </div>
    );
  }
}
