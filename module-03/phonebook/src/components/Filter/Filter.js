import React from "react";
import PropTypes from "prop-types";

export default function Filter({ onInputChange, value }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input value={value} type="text" name="filter" onChange={onInputChange} />
    </>
  );
}
Filter.propTypes = {
  onInputChange: PropTypes.func,
  value: PropTypes.string,
};
