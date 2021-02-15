import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Layout from "./Layout/Layout";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import "./styles.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    nameAlreadyExist: false,
  };

  componentDidMount() {
    const persistedContact = localStorage.getItem("contacts");
    if (persistedContact) {
      this.setState({
        contacts: JSON.parse(persistedContact),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  handlerInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nameValidator = (obj) => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name === obj.name);
  };

  addContact = (e, obj) => {
    e.preventDefault();

    if (!this.nameValidator(obj)) {
      console.log("xxxxx", this.nameValidator);
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, obj],
        filter: "",
      }));
      return;
    }
    this.setState({ nameAlreadyExist: true });
    setTimeout(() => this.setState({ nameAlreadyExist: false }), 1500);
  };

  contactDelete = (id) => {
    const { contacts } = this.state;
    const newContact = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContact });
  };

  render() {
    const { contacts, filter, nameAlreadyExist } = this.state;
    const filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <Layout className="Layout">
        <CSSTransition
          in={nameAlreadyExist}
          appear
          classNames="InfoMessage-exist"
          timeout={250}
          unmountOnExit
        >
          <p className="InfoMessage">Contact already exists!</p>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames="Title-animation"
          unmountOnExit
        >
          <h1 className="Title">Phonebook</h1>
        </CSSTransition>

        <ContactForm handlerSubmit={this.addContact} contacts={contacts} />
        <CSSTransition
          in={contacts.length > 1}
          appear
          timeout={250}
          classNames="Filter"
          unmountOnExit
        >
          <Filter onInputChange={this.handlerInput} value={filter} />
        </CSSTransition>
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
