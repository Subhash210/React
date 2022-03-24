import React from "react";

const WithCounter = WrappedCounter => {
    class withCounter extends React.Component{
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
          
        render(){
            return <WrappedCounter
                    count = {this.state.count}
                    increament = {this.increamentCounter}
                    {...this.props}/>
        }
    } 
    return withCounter
}

export default WithCounter