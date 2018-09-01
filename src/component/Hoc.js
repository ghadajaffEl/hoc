import React, { Component } from "react";
import Spinner from "./Spinner";
import MovieList from "./MovieList";

let Hoc = BaseComponent =>
  class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      if (this.props.isLoading == true) {
        return <Spinner />;
      } else {
        return <BaseComponent />;
      }
    }
  };

export default Hoc;
