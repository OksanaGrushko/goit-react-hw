import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./ContactList.css";

function ContactList({ contacts }) {
  return (
    <TransitionGroup component="ul" className="ContactList-ul">
      {contacts.map((contact) => {
        return (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames="ContactList-ul-fade"
          >
            <ContactListItem id={contact.id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  filtredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  buttonClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
