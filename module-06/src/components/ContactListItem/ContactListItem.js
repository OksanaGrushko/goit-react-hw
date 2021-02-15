import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./ContactListItem.css";
import contactsActions from "../../redux/contacts/contactsActions";

function ContactListItem({ name, number, id, removeButtonClick }) {
  return (
    <li className="ContactList-list">
      <p className="ContactList-inform">{name}</p>
      <p className="ContactList-inform">{number}</p>
      <button
        className="ContactList-button"
        type="button"
        onClick={removeButtonClick}
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

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeButtonClick: () => dispatch(contactsActions.contactRemove(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
