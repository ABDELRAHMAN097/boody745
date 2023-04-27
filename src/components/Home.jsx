import React, { Component } from 'react'

export default class Home extends Component {
  state={
    name:"acer nitro"
  }
  render() {
    return (
     
      <>
        <h2><span>Product Name:</span> {this.state.name}</h2>
        <a href="https://www.acer.com/us-en/laptops/nitro">acer</a>
      </>
    )
  }
}
