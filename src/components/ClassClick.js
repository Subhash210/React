import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Clicked Class Component")
    }

  render() {


    return (
      <div>
        <button onClick={this.clickHandler}>Click Here Class Component</button>
      </div>
    )
  }
}

export default ClassClick
