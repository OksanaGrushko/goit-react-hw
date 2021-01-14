import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => <div className="Layout">{children}</div>;
export default Layout;

Layout.propTypes = {
  children: PropTypes.array,
};
