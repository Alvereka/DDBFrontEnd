import React, { Component } from "react";
import axios from "axios";
import Pilihkota from "../../components/Pilihkota";

export default class Kota extends Component {
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRnJlZGVyaWNrIFNjaG9lbiIsImVtYWlsIjoiQWxsYW4uU3RpZWRlbWFubjQ3QHlhaG9vLmNvbSIsImlkIjoxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTg0Nzk1NzEsImV4cCI6MTYxOTA4NDM3MX0.5bcMZfbPZZO1ylajZzEVGbMNURQaDQg2sIDNGxjkXRE";
  state = {
    product: {},
    filter: [],
    filterCategory: 0,
  };
  componentDidMount() {
    this.getDataKota();
  }

  getDataKota() {
    console.log(this.props);
    axios
      .get(`http://localhost:3000/book/${this.props.match.params.id}/`, {
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
      <section className="section-kota">
        <div className="section-judul"> Pilih Kota</div>
        <div className="kota">
          {console.log(this.state.product)}
          <Pilihkota
            warna="#00AFEF"
            huruf="white"
            name="Sewa"
            key={this.state.product.id}
            namakota="Bandung"
          ></Pilihkota>
          <Pilihkota
            warna="#00AFEF"
            huruf="white"
            name="Sewa"
            key={this.state.product.id}
            namakota="Jakarta"
          ></Pilihkota>
        </div>
      </section>
    );
  }
}
