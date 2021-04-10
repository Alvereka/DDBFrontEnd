import React, { Component } from "react";

import img from "../logo.svg";

import buku from "../assets/images/buku.png";
export default class Produk extends Component {
  render() {
    return (
      <div className={this.props.show ? "produk" : "produk hide"}>
        <div className="product-image">
          <img
            src={this.props.gambar == null ? buku : this.props.gambar}
            className="logo"
            alt="product"
            style={{ height: "250px" }}
          />
          <div className="overlay">
            <div className="overlay-content">{this.props.deskripsi}</div>
            <button
              className="btn-beli"
              onClick={() => this.props.navigate("/Lihatproduk/" + this.props.id)}
            >
              Pinjam ini
            </button>
          </div>
        </div>
        <div className="judul">
          <i>
            <b>{this.props.name}</b>
          </i>
        </div>
      </div>
    );
  }
}
