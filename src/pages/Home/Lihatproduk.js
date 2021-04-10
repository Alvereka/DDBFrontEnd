import React, { Component } from "react";
import Kotak from "../../components/Kotak";
import dummyProduct from "../../dummy/ProductApi.json";
export default class Lihatproduk extends Component {
  state = {
    products: [],
    filter: [],
    filterCategory: 0,
  };
  componentDidMount() {
    this.getDataProducts();
  }

  getDataProducts() {
    var getid = this.props.match.params.id;
    console.log(getid);

    this.setState({
      product: dummyProduct.filter((e) => {
        return e.id == getid;
      })[0],
    });
  }

  render() {
    return (
      <section className="section-keterangan">
        <div className="section-judul">Keterangan Novel</div>
        <div className="Novel">
          {console.log(this.state.product)}
          {this.state.product
            ? `${this.state.product.title} -  ${this.state.product.id}`
            : "Nothing to print here"}
          <Kotak
            // onClick={() =>
            //   this.props.navigate(
            //     "/produk/" + this.props.match.params.id + "/" + c.id
            //   )
            // }
            key={this.state.id}
            kota={this.state.image}
            namakota={this.state.title}
          ></Kotak>
        </div>
      </section>
    );
  }
}
