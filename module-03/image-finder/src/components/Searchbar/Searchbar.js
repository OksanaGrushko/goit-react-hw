import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handlerChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handlerChange}
            // autocomplete="off"
            // autofocus
            // placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
