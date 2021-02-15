import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsActions from "../../redux/contacts/contactsActions";
import "./ContactForm.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handlerInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact, onNameAlreadyExist } = this.props;
    const isNameAlreadyExist = contacts.find(
      (contact) => contact.name === name
    );
    if (isNameAlreadyExist) {
      onNameAlreadyExist();
      setTimeout(() => onNameAlreadyExist(), 1500);

      return;
    }
    onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    const btnDisabled = (name.length && number.length) > 0;
    return (
      <form className="Contact-form" onSubmit={this.handlerSubmit}>
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
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
  onNameAlreadyExist: contactsActions.contactMassege,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
