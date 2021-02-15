import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ onChangeFilter, value }) => (
  <div className="Filter-fon">
    <p className="Filter-name">Find contacts by name</p>
    <input
      className="Filter-input"
      value={value}
      type="text"
      name="filter"
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  onInputChange: PropTypes.func,
  value: PropTypes.string,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.contactFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
