import React, { Component } from "react";
import Navigate from "./components/Navigate";
import Foot from "./components/Foot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigate />
        <Foot />
      </div>
    );
  }
}

export default App;
