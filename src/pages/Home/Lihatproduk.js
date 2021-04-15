import React, { Component } from "react";
import Kotak from "../../components/Kotak";
import Keterangan from "../../components/Keterangan";
import Sewa from "../../components/Tombolsewa";
import dummyProduct from "../../dummy/ProductApi.json";
import axios from "axios";

export default class Lihatproduk extends Component {
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRnJlZGVyaWNrIFNjaG9lbiIsImVtYWlsIjoiQWxsYW4uU3RpZWRlbWFubjQ3QHlhaG9vLmNvbSIsImlkIjoxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTg0Nzk1NzEsImV4cCI6MTYxOTA4NDM3MX0.5bcMZfbPZZO1ylajZzEVGbMNURQaDQg2sIDNGxjkXRE";
  state = {
    product: {},
    filter: [],
    filterCategory: 0,
  };
  componentDidMount() {
    this.getDataBook();
  }

  getDataBook() {
    console.log(this.props);
    axios
      .get(`http://localhost:3000/book/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          product: response.data,
        });
      });
  }

  render() {
    return (
      <section className="section-keterangan">
        <div className="section-judul">Keterangan Novel</div>
        <div className="GambarNovel">
          {console.log(this.state.product)}
          <Kotak
            // onClick={() =>
            //   this.props.navigate(
            //     "/produk/" + this.props.match.params.id + "/" + c.id
            //   )
            // }
            key={this.state.product.id}
            buku={this.state.product.coverUrl}
          ></Kotak>
        </div>
        <div className="GambarNovel2">
          {console.log(this.state.product)}
          <Keterangan
            key={this.state.product.id}
            name={this.state.product.title}
            penulis={this.state.product.author}
            publisher={this.state.product.publisher}
          ></Keterangan>
        </div>
        <div className="Tombol">
          {console.log(this.state.product)}
          <Sewa
            warna="#00AFEF"
            huruf="white"
            name="Sewa"
            key={this.state.product.id}
            title={this.state.product.title}
          ></Sewa>
        </div>
      </section>
    );
  }
}
