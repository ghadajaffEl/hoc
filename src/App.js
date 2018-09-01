import React, { Component } from "react";
import Hoc from "./component/Hoc";
import "./App.css";
import MovieList from "./component/MovieList";
let HocTest = Hoc(MovieList);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    return (
      <div className="App">
        <HocTest isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
