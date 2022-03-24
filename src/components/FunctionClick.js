import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Clicked Functional Component");
    };

  return (
    <div>
      <button onClick={clickHandler}>Click Here Functional Component</button>
    </div>
  )
}

export default FunctionClick
