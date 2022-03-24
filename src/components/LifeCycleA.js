import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Ram"
      }
      console.log('LifeCycleA Constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDesiredStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleA getSnapshotBeforeUpdate ")
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeText = () => {
        this.setState({
            name : 'Manasa'
        })
    }
    
    render() {
        console.log('LifeCycleA render')
        return (<div>LifeCycleA
            <div>
                <button onClick={this.changeText}>Change text</button>
                <LifeCycleB/>
            </div>
        </div>)
  }
}

export default LifeCycleA
