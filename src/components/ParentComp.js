import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Msa"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "Subhash"
            })
        } , 3000)
    }
    
  render() {
    console.log('*************** Parent Comp ******************')
    return (
      <div>
        Parent Component
{/* .        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.statename}></PureComp> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp


