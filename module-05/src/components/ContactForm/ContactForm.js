import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import "./ContactForm.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handlerInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = () => {
    const { name, number } = this.state;
    const contact = {
      name: name,
      id: uuid(),
      number: number,
    };
    this.setState({ name: "", number: "" });

    return contact;
  };

  render() {
    const { name, number } = this.state;
    const btnDisabled = (name.length && number.length) > 0;
    return (
      <form
        className="Contact-form"
        onSubmit={(e) => this.props.handlerSubmit(e, this.handlerSubmit())}
      >
        <p className="Contact-text">Name</p>
        <input
          className="Contact-input"
          value={name}
          name="name"
          onChange={this.handlerInput}
        />
        <p className="Contact-text">Number</p>
        <input
          className="Contact-input"
          value={number}
          name="number"
          onChange={this.handlerInput}
        />
        <br />
        <button
          className="Contact-button"
          type="submit"
          disabled={!btnDisabled}
        >
          Add contacts
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onHendlerSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
