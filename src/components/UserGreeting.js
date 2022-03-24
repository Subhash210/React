import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    

  render() {

    return(
        this.state.isLoggedIn && <div>Welcome Dummy</div>
    )

    /* USING TERINARY OPEARATOR */
    // return (
    //     this.state.isLoggedIn ? (
    //         <div>Welcome Dummy</div>
    //     ) : (
    //         <div>Welcome to the Party Anonymus</div>
    //     )
    // )

    /******* USING ELEMENT VARIABLES **********/
    // let message;
    // if(this.state.message){
    //     message = <div>Welcome Dummy</div>
    // }else{
    //     message = <div>Welcome to the Party Anonymus</div>
    // }
    // return <div>{message}</div>;
    ///////    USING IF ELSE   ///////
            /*if(this.state.isLoggedIn){
                return <div>Welcome Dummy</div>
             }else {
                return <div>Welcome to the Party Anonymus </div>
             }*/
    // return (
    //   <div>
    //     <div>Welcome Dummy</div>
    //     <div>Welcome to the party</div>
    //   </div>
    // )
  }
}

export default UserGreeting
