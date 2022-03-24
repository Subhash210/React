import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increament(){
        // this.setState({
        //     count : this.state.count + 1
        // })
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }

    increamentFive(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }

    decreament(){
        this.setState({
            count : this.state.count - 1
        })
    }
    

  render() {
    return (
        <div>
            <div> Count - {this.state.count} </div>
            <button onClick={() => this.increament()}>Increament</button>
            <button onClick={() => this.decreament()}>Decreament</button>
        </div>
    )
  }
}

export default Counter
