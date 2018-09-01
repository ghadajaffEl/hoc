import React, { Component } from "react";
import { FadeLoader } from "react-spinners";
import { css } from "react-emotion";

const spinner = css`
  margin-top: 300px;
  margin-left: 700px;
`;

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="spinner">
        <FadeLoader
          className={spinner}
          sizeUnit={"px"}
          size={550}
          color={"#BD10E0"}
        />
      </div>
    );
  }
}

export default Spinner;
