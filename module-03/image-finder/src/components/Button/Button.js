import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  componentDidMount() {
    this.props.onScroll();
  }

  render() {
    return (
      <button className="Button" type="button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
};
