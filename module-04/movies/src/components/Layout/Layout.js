import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from './styles';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
    <Container>
        <Appbar />
        {children}
    </Container>
);

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
