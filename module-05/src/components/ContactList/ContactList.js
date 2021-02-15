import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import "./ContactList.css";

export default function ContactList({ filtredContacts, buttonClick }) {
  return (
    <TransitionGroup component="ul" className="ContactList-ul">
      {filtredContacts.map((contact) => {
        return (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames="ContactList-ul-fade"
          >
            <ContactListItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
              buttonClick={buttonClick}
            ></ContactListItem>
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
