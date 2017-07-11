import React from "react";
import ReactDOM from "react-dom";


class Other extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        <button onClick={() => {
            window.alert(`hey there i'm ${this.props.name}`)
          }} className="component-other super-fancy-button">{this.props.name}</button>
      );
    }
}

export default Other;
