import React, { Component, Fragment } from "react";
import "./AppClass.css";

export default class AppClass extends Component {
  // This is the only way to put state in a class component
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }

  // anonymous function applied
  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({ isTrue: false });
      return;
    }
    this.setState({ isTrue: true });
  };

  render() {
    return (
      <Fragment>
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <Fragment>
            <p className="p-green">The current value of isTrue is true.</p>
          </Fragment>
        )}
        <hr />
        {this.state.isTrue ? <p>is true.</p> : <p>is false.</p>}
        <hr />
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>
      </Fragment>
    );
  }
}
