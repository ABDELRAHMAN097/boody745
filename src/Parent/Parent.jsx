import React, { Component } from "react";
import Chiled from "../Chiled/Chiled";

export default class Parent extends Component {
  state = {
    Products: [
      {
        id:1,
        productName: "dell",
        productCategory: "Laptop",
        productPrice: 8600,
        onSeal: true,
        quantety: 85,
      },

      {
        id:2,
        productName: "Lenovo",
        productCategory: "Laptop",
        productPrice: 16200,
        onSeal: false,
        quantety: 65,
      },

      {
        id:3,
        productName: "iphoneX",
        productCategory: "phone",
        productPrice: 6500,
        onSeal: true,
        quantety: 14,
      },

      {
        id:4,
        productName: "iphoneXs",
        productCategory: "phone",
        productPrice: 10200,
        onSeal: false,
        quantety: 25,
      },

      {
        id:5,
        productName: "hp",
        productCategory: "Laptop",
        productPrice: 9000,
        onSeal: false,
        quantety: 84,
      },

      {
        id:6,
        productName: "dell",
        productCategory: "Laptop",
        productPrice: 15000,
        onSeal: true,
        quantety: 47,
      },
      {
        id:7,
        productName: "toshipa",
        productCategory: "Laptop",
        productPrice: 8000,
        onSeal: false,
        quantety: 50,
      }
    ],
  }

  deleteProduct=(curindex)=>{
    let myProducts =[...this.state.Products];
    myProducts.splice(curindex,1)
    this.setState({Products:myProducts})
  }

  updateProduct=(curIndex)=>{
    let myProducts=[...this.state.Products]
    myProducts[curIndex].productPrice++;
    this.setState({Products:myProducts})
  }

  render() {
    return (
      
        <div className="bg-dark vh-1000 py-5 w-90 m-auto text-center">
          <div className="contaner p-5">
            <div className="row gy-3">
              <h2>Parent</h2>

              {this.state.Products.map((product,index) => {

                return <Chiled key={product.id} update={this.updateProduct} productIndex={index}  delete={this.deleteProduct} productInfo={product}/>
                
              })}
            </div>
          </div>
        </div>
      
    );
  }
}

// let colors = {red, blue, white, black}
// colors((colors)=>{return `<h2>{color}w</h2>`})
