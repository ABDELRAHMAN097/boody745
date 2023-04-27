import React, { Component } from 'react'
export default class About extends Component {

  state={
    count:0
  }
  changeCount =()=>{
    this.state.count++;
    console.log(this.state.count)
    this.setState({count:this.state.count})
  }

  render() {
    return (
      <>
        <h3>{this.state.count}</h3>
        <button onClick={()=>{this.changeCount()}} className='btn btn-warning'>Change Count</button>
        
      </>
    )
  }
}
