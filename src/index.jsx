import React, { Component } from "react";
import PropTypes from "prop-types";

import throbber from "./throbber.svg";

class MyComponent extends Component {
  static propTypes = {
    initiallyVisible: PropTypes.bool,
  };

  static defaultProps = {
    initiallyVisible: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: props.initiallyVisible,
    };
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="MyComponent">
        <button onClick={() => this.setState({ visible: !visible })}>
          Toggle
        </button>

        <div
          className="throbber"
          style={{
            background: `url(${throbber}) center no-repeat`,
            backgroundSize: "contain",
            display: visible ? "initial" : "none",
            minWidth: "20px",
            minHeight: "20px",
          }}
        />
      </div>
    );
  }
}

export default MyComponent;
