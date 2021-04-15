import React, { Component } from "react";

export default class Tombolsewa extends Component {
  render() {
    return (
      <div>
        <button
          className="kategori"
          style={{
            backgroundColor: this.props.warna,
            color: this.props.huruf ? this.props.huruf : "#000",
          }}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
