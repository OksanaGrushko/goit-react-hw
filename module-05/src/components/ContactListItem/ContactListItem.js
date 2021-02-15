import React from "react";
import PropTypes from "prop-types";
import "./ContactListItem.css";

export default function ContactListItem({ name, number, id, buttonClick }) {
  return (
    <li className="ContactList-list">
      <p className="ContactList-inform">{name}</p>
      <p className="ContactList-inform">{number}</p>
      <button
        className="ContactList-button"
        type="button"
        onClick={() => buttonClick(id)}
      >
        X
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  buttonClick: PropTypes.func,
};
