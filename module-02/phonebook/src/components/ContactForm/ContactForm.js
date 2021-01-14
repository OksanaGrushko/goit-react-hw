import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

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
    return (
      <form onSubmit={(e) => this.props.handlerSubmit(e, this.handlerSubmit())}>
        <p>Name</p>
        <input value={name} name="name" onChange={this.handlerInput} />
        <p>Number</p>
        <input value={number} name="number" onChange={this.handlerInput} />
        <button type="submit">Add contacts</button>
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
