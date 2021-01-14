import React from "react";
import PropTypes from "prop-types";

export default function ContactListItem({ name, number, id, buttonClick }) {
  return (
    <li>
      <p>
        {name} {number}
        <button type="button" onClick={() => buttonClick(id)}>
          Delite
        </button>
      </p>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  buttonClick: PropTypes.func,
};
