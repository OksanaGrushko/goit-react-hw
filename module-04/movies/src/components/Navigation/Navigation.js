import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
    color: red;
    &.active {
        color: green;
    }
`;

const Navigation = () => (
    <ul>
        {routes.map(route => {
            if (route.label === 'Home' || route.label === 'Movies') {
                return (
                    <li key={route.path}>
                        <LinkElem to={route.path} exact={route.exact}>
                            {route.label}
                        </LinkElem>
                    </li>
                );
            }
        })}
    </ul>
);

export default Navigation;
