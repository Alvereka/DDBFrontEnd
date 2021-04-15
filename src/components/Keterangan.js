import React, { Component } from "react";

export default class Keterangan extends Component {
  render() {
    return (
      <div className="kotak-keterangan">
        <b>
          {"Judul:\t" + this.props.name} <br />
          {"Penulis:\t" + this.props.penulis}
          <br />
          {"Publisher:\t" + this.props.publisher}
          <br />
        </b>
      </div>
    );
  }
}
