import React, { Component } from 'react'

export default class Chiled extends Component {
  render() {
    // console.log(this.props.productInfo)
    // console.log(this.props.productIndex)
    let {productName,productCategory,productPrice,onSeal,quantety}=this.props.productInfo;
    
    return (
      <>
      <div className='col-md w-50 h-70'>
        <div className='bg-light p-5 position-relative'>
            <h2>Name:{productName}</h2>
            <h2>Category: {productCategory}</h2>
            <h2>price: {productPrice}</h2>
            {onSeal == true ? <div className='bg-warning fw-bold position-absolute top-0 end-0 p-2'>seal</div>:''}
            {quantety < 50 ? <div className='bg-warning pt-2 pb-2 m-2 fw-bold'>quantety: {quantety}</div>:''}
            <button onClick={()=>this.props.delete(this.props.productIndex)} className='btn btn-outline-danger w-100'>Delete</button>
            <button onClick={()=>this.props.update(this.props.productIndex)} className='btn btn-outline-info w-100'>+</button>
        </div>
      
      </div>
      </>
    )
  }
}
