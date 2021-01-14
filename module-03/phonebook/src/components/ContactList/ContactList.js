import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

export default function ContactList({ filtredContacts, buttonClick }) {
  return (
    <ul>
      {filtredContacts.map((contact) => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            buttonClick={buttonClick}
          ></ContactListItem>
        );
      })}
    </ul>
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
