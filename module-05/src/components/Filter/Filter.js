import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

export default function Filter({ onInputChange, value }) {
  return (
    <div className="Filter-fon">
      <p className="Filter-name">Find contacts by name</p>
      <input
        className="Filter-input"
        value={value}
        type="text"
        name="filter"
        onChange={onInputChange}
      />
    </div>
  );
}
Filter.propTypes = {
  onInputChange: PropTypes.func,
  value: PropTypes.string,
};
