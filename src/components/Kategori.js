import React, { Component } from "react";

export default class Kategori extends Component {
  render() {
    return (
      <div
        onClick={this.props.handler}
        className="kategori"
        style={{
          backgroundColor: this.props.warna,
          color: this.props.huruf ? this.props.huruf : "#000",
        }}
      >
        {this.props.name}
      </div>
    );
  }
}
