import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";
import Layout from "./Layout/Layout";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import "./styles.css";

function App({ isNameAlreadyExist }) {
  return (
    <Layout className="Layout">
      <CSSTransition
        in={isNameAlreadyExist}
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
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  isNameAlreadyExist: state.contacts.nameAlreadyExist,
});
const mapDispatchToProps = {
  onMassage: contactsActions.contactMassege,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
