import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handlKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlKeyDown);
  }
  handlKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.selectImgUrl} alt={this.props.searchImgUrl} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string,
};
