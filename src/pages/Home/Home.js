import React, { Component } from "react";
import Produk from "../../components/Produk";
import Kategori from "../../components/Kategori";
import BukuLogo from "../../assets/images/buku.png";
import { FadeInSection } from "../../components/FadeInSection";

import dummyCategory from "../../dummy/CategoryApi.json";
import dummyProduct from "../../dummy/ProductApi.json";

export default class Home extends Component {
  state = {
    products: [],
    filter: [],
    filterCategory: 0,
  };

  colors = [
    {
      color: "#972A2B",
    },
    {
      color: "#972A2B",
    },
    {
      color: "#008BA7",
    },
    {
      color: "black",
    },
  ];

  filterHandler(idCategory) {
    console.log("filter ", this.state.filter);
    this.setState({ onLoading: true });
    if (idCategory !== 0) {
      this.setState({
        filterCategory: idCategory,
        filter: this.state.products.filter((e) => {
          return e.Category.id === idCategory;
        }),
      });
    } else {
      this.setState({
        filterCategory: idCategory,
        filter: this.state.products,
      });
    }
  }

  getDataProducts() {
    this.setState({
      products: dummyProduct,
    });
    // return ProductApi.get().then((res) =>
    //   this.setState(
    //     { ...this.state, products: res.data, filter: res.data },
    //     () => {
    //       console.log("Products : ", this.state.products);
    //     }
    //   )
    // );
  }

  getDataCategory() {
    this.setState({
      category: dummyCategory,
    });
    // return CategoryApi.get().then((res) =>
    //   this.setState({ ...this.state, category: res.data }, () => {
    //     console.log("category : ", this.state.category);
    //   })
    // );
  }

  componentDidMount() {
    document.title = "Katalog Produk | Sukun Online Store";
    this.getDataCategory();
    this.getDataProducts();
  }

  render() {
    return (
      <section className="section-katalog">
        <div className="section-title">Katalog Buku</div>
        <div className="section-content">
          <div className="category">
            <Kategori
              name="Semua"
              warna="#00AFEF"
              huruf="white"
              handler={() => this.filterHandler(0)}
            ></Kategori>
            {this.state.category
              ? this.state.category.map((cat, index) => {
                  return (
                    <Kategori
                      key={cat.id}
                      name={cat.name}
                      warna={this.colors[index].color}
                      huruf="white"
                      handler={() => this.filterHandler(cat.id)}
                    ></Kategori>
                  );
                })
              : "No Data"}
          </div>
          <div className="products">
            {this.state.filterCategory == 0
              ? this.state.products.map((product, index) => {
                  return (
                    <Produk
                      key={product.id}
                      navigate={this.props.navigate}
                      id={product.id}
                      name={product.title}
                      deskripsi={product.description}
                      gambar={product.image}
                      show={true}
                    ></Produk>
                  );
                })
              : this.state.products.map((product, index) => {
                  return (
                    <Produk
                      key={product.id}
                      navigate={this.props.navigate}
                      id={product.id}
                      name={product.title}
                      deskripsi={product.description}
                      gambar={product.image}
                      show={
                        this.state.filterCategory == product.Category.id
                          ? true
                          : false
                      }
                    ></Produk>
                  );
                })}
          </div>
          {/* <div
            className={
              // "product-overlay show"
              this.state.onLoading ? "product-overlay" : "product-overlay show"
            }
          ></div> */}
        </div>
        {/* <div className="bawahan-home">
          <div className="bawahan-home-left">
            <ul>
              <li>
                <b>Sukun Online Store</b>
              </li>
              <li>
                <b>PR Sukun 2020</b>
              </li>
            </ul>
          </div>
          <div className="bawahan-home-right">
            <img src={BukuLogo} alt="sukun-logo"></img>
          </div>
        </div> */}
      </section>
    );
  }
}
