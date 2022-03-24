import Reactm, {Component} from 'react'

class Welcome extends Component {
    render(){
        return (
        <div>
        <h1>Welcome {this.props.name}, I mean {this.props.heroTag}</h1>
        
        </div>
        )
        
    }
}

export default Welcome;