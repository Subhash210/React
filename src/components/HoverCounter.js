import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      increamentCounter = () => {
          this.setState( prevState => {
              return {count : this.state.count + 1}
          })
      }
  render() {
    const {count , increament} = this.props
    return (
      <div>
        <h1 onMouseOver={increament}>{this.props.name} Hovered {count} times</h1>
      </div>
    )
  }
}

export default WithCounter(HoverCounter)
