import React, { Component } from "react";

export default class Pilihkota extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.navigate("/home/")}
        className="kota"
        style={{
          backgroundColor: this.props.warna,
          color: this.props.huruf ? this.props.huruf : "#000",
        }}
      >
        {this.props.namakota}
      </div>
      
    );
  }
}
