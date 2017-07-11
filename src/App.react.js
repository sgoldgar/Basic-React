import React from "react";
import ReactDOM from "react-dom";
import Other from "./Other";


class App extends React.Component{
    render(){
      return (
        <div className="component-app">
          <h1>Hello World</h1>
          <Other name="button"/>
          <Other name="hearts"/>
          <Other name="rainbows"/>
        </div>
      );
    }
}

export default App;
