import React  from "react";

const Hello = () => {
    /******************     USING JSX     ****************/
    // return (
    //     <div>
    //         <h1>Hello Dummy 2</h1>
    //     </div>
    // )
    /******************  WITHOUT USING JSX  ****************/
    return React.createElement('div' , {id: 'Hello' , className: 'dummyClass'} ,
     React.createElement('h1' , null , 'Hello Dummy 2'))

}

export default Hello;