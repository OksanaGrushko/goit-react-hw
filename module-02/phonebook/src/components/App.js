import React, { Component } from "react";
import Layout from "./Layout/Layout";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handlerInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nameValidator = (obj) => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name === obj.name);
  };
  addContact = (e, obj) => {
    console.log(e);
    e.preventDefault();
    this.setState((prevState) => {
      return !this.nameValidator(obj)
        ? {
            contacts: [...prevState.contacts, obj],
            filter: "",
          }
        : window.alert(`${obj.name} is already in contacts.`);
    });
  };

  contactDelete = (id) => {
    const { contacts } = this.state;
    const newContact = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContact });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm handlerSubmit={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter onInputChange={this.handlerInput} value={filter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            filtredContacts={filtredContacts}
            buttonClick={this.contactDelete}
          />
        )}
      </Layout>
    );
  }
}
