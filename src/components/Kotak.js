import React, { Component } from "react";
import buku from "../assets/images/buku.png";

export default class Kotak extends Component {
  render() {
    return (
      <div className="ket">
        <div className="kotak-image">
          <img
            src={buku}
            className="kotak-logo"
            alt="logo-kotak"
            style={{ maxWidth: 250 }}
          />
        </div>
        <div className="kotak-judul">
          <b>{this.props.namakota}</b>
        </div>
      </div>
    );
  }
}
